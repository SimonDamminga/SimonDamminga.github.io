require 'robot_arm'
robot_arm:load_level('exercise 9')
robot_arm.speed = 0.99
move = 1 
while move <5 do
  for i=1, move do
    robot_arm:grab()
    for i=1, 5 do
    robot_arm:move_right()
    end
    robot_arm:drop()
    for i=1, 5 do
    robot_arm:move_left()
    end
  end
  robot_arm:move_right()
  move = move + 1
end