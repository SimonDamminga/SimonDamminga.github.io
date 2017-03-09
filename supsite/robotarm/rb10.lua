require 'robot_arm'
robot_arm:load_level('exercise 11')
robot_arm.speed = 0.95
for i=1, 10 do
  robot_arm:grab()
  robot_arm:scan()
  if robot_arm:scan()== 'white' then
    robot_arm:move_right()
    robot_arm:drop()
  else
    robot_arm:drop()
  end
robot_arm:move_right()
end