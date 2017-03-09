require 'robot_arm'
robot_arm:load_level('exercise 10')
robot_arm.speed = 0.99
move = 9
while move >0 do
  robot_arm:grab()
  for i=1, move do
    robot_arm:move_right()
  end
  move = move - 1
  robot_arm:drop()
  for i=1, move do 
    robot_arm:move_left()
  end
  move = move - 1
end