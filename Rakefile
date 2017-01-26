# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

def build_js
  sh 'npm', 'run', 'build', '--prefix', 'client'
end

def run_feature_tests
  sh 'rspec'
end

def build_js_and_test
  build_js
  run_feature_tests
end

task :ft do
  build_js_and_test
end

def git_add
  sh 'git', 'add', '.'
end

def git_commit message
  sh 'git', 'ci', '-m', message
end

task :c, [:commit_message] do |t, args|
  git_add
  git_commit args[:commit_message]
end
