task :push do
  test_commit_push
end

task :test do
  test_and_build_in_ci
end

task :build_js do
  build_js
end

def test_and_build_in_ci
  sh 'CI=true rake no_run_test'
end

task :no_run_test do
  build_js_and_test
end

def build_js_and_test # only works if ci var is set
  run_node_tests
  build_js
  run_rspec_tests
end

def test_commit_push
  message = get_commit_message
  test_and_build_in_ci
  git_add_and_commit message
  push
end

def interactive_git_add_and_commit
  message = get_commit_message
  git_add_and_commit message
end

def git_add_and_commit message
  git_add
  git_commit message
end

def run_node_tests
  sh 'npm', 'test', '--prefix', 'client'
end

def build_js
  sh 'npm', 'run', 'build', '--prefix', 'client'
end

def run_rspec_tests
  sh 'rspec'
end

def git_add
  sh 'git', 'add', '.'
end

def git_commit message
  sh 'git', 'ci', '-m', message
end

def get_commit_message
  puts 'enter a commit message:'
  print '=>'
  STDIN.gets.chomp
end

def push
  sh 'git push'
end
