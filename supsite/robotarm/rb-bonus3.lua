require 'robot_arm'
robot_arm:load_level("exercise 11")
robot_arm.speed = 0.99
steps = 9
red = 0
blue = 0
green = 0
white = 0
--scan alle blokjes--
robot_arm:move_right()
for i=1, 9 do
  robot_arm:grab()
  robot_arm:scan()
  if robot_arm:scan() == 'red' then
    red = red + 1
  elseif robot_arm:scan() == 'blue' then
    blue = blue + 1
  elseif robot_arm:scan() == 'green' then
    green = green + 1
  else do 
    white = white + 1
  end
end 
robot_arm:drop()
robot_arm:move_right()
end
--ga terug--
for i=1, 9 do 
  robot_arm:move_left()
end
--bepaal welke kleur er meer van zijn--
if red >= blue then 
  blue = blue - blue
else
  red = red - red
end
if red >= green then
  green = green - green
else
  red = red - red
end
if red >= white then
  white = white - white
else
  red = red - red
end
if blue >= red then
  red = red - red
else
  blue = blue - blue
end
if blue >= green then
  green = green - green 
else
  blue = blue - blue
end
if blue >= white then 
  white = white - white
else
  blue = blue - blue
end
if green >= red then 
  red = red - red 
else
  green = green - green 
end
if green >= blue then 
  blue = blue - blue
else
  green = green - green
end
if green >= white then 
  white = white - white
else
  green = green - green
end
robot_arm:move_right()
if red > 0 then 
  while steps >0 do
  robot_arm:grab()
  robot_arm:scan()
    if robot_arm:scan() == 'red' then
      for i=1, steps do
        robot_arm:move_right()
      end
      robot_arm:drop()
      for i=1, steps do
        robot_arm:move_left()
      end
    else 
      robot_arm:drop()
      robot_arm:move_right()
      steps = steps - 1
    end
  end
elseif blue > 0 then
  while steps >0 do
  robot_arm:grab()
  robot_arm:scan()
    if robot_arm:scan() == 'blue' then
      for i=1, steps do
        robot_arm:move_right()
      end
      robot_arm:drop()
      for i=1, steps do
        robot_arm:move_left()
      end
    else 
      robot_arm:drop()
      robot_arm:move_right()
      steps = steps - 1
    end
  end
elseif green > 0 then
  while steps >0 do
  robot_arm:grab()
  robot_arm:scan()
    if robot_arm:scan() == 'green' then
      for i=1, steps do
        robot_arm:move_right()
      end
      robot_arm:drop()
      for i=1, steps do
        robot_arm:move_left()
      end
    else 
      robot_arm:drop()
      robot_arm:move_right()
      steps = steps - 1
    end
  end
elseif white > 0 then
  while steps >0 do
  robot_arm:grab()
  robot_arm:scan()
    if robot_arm:scan() == 'white' then
      for i=1, steps do
        robot_arm:move_right()
      end
      robot_arm:drop()
      for i=1, steps do
        robot_arm:move_left()
      end
    else 
      robot_arm:drop()
      robot_arm:move_right()
      steps = steps - 1
    end
  end
end