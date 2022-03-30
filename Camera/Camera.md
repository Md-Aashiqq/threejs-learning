# Camera Class

Camera is the abstart class so we cant create the object

## Array Camera

    => ArrayCamera render the scene from multiple cameras on specfic areas of the render

## Stereo Camera

    => Render the Scene through two camera that mimic the eyes to create a parallax effect
    => Use with devices like VR Headset , red and blue
    glasses or cardboard

## Cube Camera

    => The cubeCamera do 6 renders,each onne facing a different direction Can render the surrounding for things like enviroments map , reflection  or Shadow map

## Othographic Camera

    => Render the scene without Perpective

## Perspective Camera

    Parameters
        => ## Feild of View
            => Vertical vision angle
            => In degrees
            => also called fov
        => ## Aspect Ratio
            => Width of the render divided the height of the render
        => ## Near and Far
            => How close and how far the camera can see

## Orthographic Camera

    => Differ from Perspective Camera by its lack of Perspective

    => Object has the same size regardless of their distance to the camera

### Controls

## Device Orientation Controls

    => Will automatically retrive the device orientation if your device ,OS and browser allow it and rotate the camera accordigly Useful it to create immersive universe or VR experience

## FLy Controls

    => Enables moving the camera like if you were on a spacehip you can rotate on all 3 axes , go forward and go backwards

## First Person Controls

    => is Like FlyControls , but with a fixed up axis
    => Doesnt work in FPS games

## Pointer Look Controls

    => PointerLook Controls uses the pointer lock javascript API , Hard to use and almost only handles the pointer lock and camera rotation

## ORBIT CONTROLS

    => OrbitControls is more useful , when we use camera rotation a huge manner.
    => Zoom  in and zoom out

## TrackBall Controls

    Like a orbit controls without the vertical angle limts

## Transfrom Controls

    Transform nothing do with camera , Change the postion  of Mesh

## Drag Controls

    => Nothing with camera , Its use to drag the mesh
