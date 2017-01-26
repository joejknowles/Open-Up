# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

def build_js
  sh 'npm', 'run', 'build', '--prefix', 'client'
end

def run_rspec_tests
  sh 'rspec'
end

def build_js_and_test
  build_js
  run_rspec_tests
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

def interactive_git_add_and_commit
  puts 'enter a commit message'
  message = STDIN.gets.chomp
  git_add_and_commit message
end

def commit_if_tests_pass
  build_js_and_test
  interactive_git_add_and_commit
end

task :cc do
  commit_if_tests_pass
end

task :ft do
  build_js_and_test
end

task :c, [:commit_message] do |t, args|
  git_add_and_commit args[:commit_message]
end
