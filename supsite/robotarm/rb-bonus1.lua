require 'robot_arm'
robot_arm:load_level("exercise 3")
robot_arm.speed = 0.99
steps = 2
while steps < 9 do
  robot_arm:grab()
  for i=1, steps do
    robot_arm:move_right()
  end
  robot_arm:drop()
  for i=1, steps do
    robot_arm:move_left()
  end
  steps = steps + 2
  end