# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

task :ft do
  sh 'npm', 'run', 'build', '--prefix', 'client'
  sh 'rspec'
end

task :c do
  sh 'git', 'add', '.'
  sh 'git', 'ci', '-m',  'parse date from server using date-fns'
end
