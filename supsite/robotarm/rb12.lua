require 'robot_arm'
robot_arm:random_level(1)
robot_arm.speed = 0.99
steps = 1 
block = true
while block == true do
robot_arm:grab()
robot_arm:scan()
  if robot_arm:scan() == nil then
    block = false
  else
for i=1, steps do
  robot_arm:move_right()
end
robot_arm:drop()
for i=1, steps do
  robot_arm:move_left()
end
steps = steps + 1
end
end