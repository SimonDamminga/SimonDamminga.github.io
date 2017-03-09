require 'robot_arm'
robot_arm:load_level('exercise 4')
robot_arm.speed = 0.99
for i=1, 3 do
  robot_arm:grab()
  for i=1, 2 do
    robot_arm:move_right()
  end
  robot_arm:drop()
  for i=1, 2 do
    robot_arm:move_left()
  end
end
robot_arm:move_right()
robot_arm:move_right()
for i=1, 3 do
  robot_arm:grab()
  for i=1, 1 do
    robot_arm:move_left()
  end
  robot_arm:drop()
  for i=1, 1 do
    robot_arm:move_right()
  end
end