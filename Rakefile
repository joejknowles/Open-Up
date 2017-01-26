# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

task :push do
  test_commit_push
end

task :test do
  test_and_build_in_ci
end

def test_commit_push
  message = get_commit_message
  test_and_build_in_ci
  git_add_and_commit message
  push
end

task :no_run_test do
  build_js_and_test
end

def build_js_and_test # only works if ci var is set
  run_node_tests
  build_js
  run_rspec_tests
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

def test_and_build_in_ci
  sh 'CI=true rake no_run_test'
end

def git_add
  sh 'git', 'add', '.'
end

def git_commit message
  sh 'git', 'ci', '-m', message
end

def git_add_and_commit message
  git_add
  git_commit message
end

def get_commit_message
  puts 'enter a commit message'
  STDIN.gets.chomp
end

def interactive_git_add_and_commit
  git_add_and_commit get_commit_message
end

def push
  sh 'git push'
end
