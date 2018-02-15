# LifeGuard.IO

Inspiration
In Freakonomics (one of my favorite books) there is an entire chapter showing that pools are more dangerous to people in the US than guns and that got us thinking about how these tragic accidents due to pools could be prevented and how we could save lives in any way possible. When we started looking at the statistics about drowning deaths in the US we saw that drowning is the second leading cause of injury related death for children under 15 and that for the majority of cases of child drownings there are adults supervising but they simply don't pay attention for a short amount of time or do not realize that there is a drowning happening. We realized that using machine learning and visual image processing we could develop a way to detect if anyone is drowning in a live video feed and then send an alert immediately if we detect that someone is drowning.

What it does
Our machine learning model can take in a live video feed of people swimming in a swimming pool and can detect whether anyone is drowning and if so can identify where in the video the person who is drowning is located. We can then draw a boundary box around the location in which the drowning victim is and alert the person who is associated with the video feed about the drowning.

How we built it
We first had to build our own dataset of videos of people drownings as there were no available data sets that contained this action information. To do this we found all the videos we could that contained people drowning and then we isolated the action of drowning from the video using VoTT and iMovie. We also used actions of those who were not drowning as a separate class and these actions were taken from the same dataset from people who were in the same pool as those who were drowning. We then tested multiple models on microsoft azure on their data science virtual machine to try and correctly detect the action of drowning from a video until we landed on using a 3 dimensional convolutional net that was capable of analyzing spatiotemporal information. To implement this model we used the microsoft cognitive toolkit (CNTK) on the virtual machine. We used to send out the real time notification when a drowning was detected.

Challenges we ran into
The first challenge that we ran into was the difficulty in getting a dataset to train with. We looked through multiple modern action datasets such as google's AVA dataset and UCF101. We ended up having to create our own dataset from scratch and integrating it with some data from the UCF101 dataset. Another challenge that we ran into was when we were trying to decide what model to use to identify the drowning action. We started by using the best object detection frameworks such as YOLO (you only look once) and R-CNN's. There did not work very well as they only took into account single frames when making their decision and so were bad at detecting actions which took place over time. We tried using previous frames as a mask over the latest frame so that each frame contained information about how actions happened over time but this also did not work well. Finally we used ran into a recent paper describing using 3d CNN's to classify actions and ended up implementing that.

Accomplishments that we're proud of
Creating our own video dataset took a significant amount of time but was quite rewarding after we completed. Getting the model to work also took a very long amount of time with multiple setbacks as we did not have any free access to a GPU so our training was slow but it was very rewarding to see the model identify that someone was drowning for the first time.

What we learned
We learned how to use microsoft azure to host a machine learning model so that we could analyze real time video in the cloud and provide instant recognition results from our model. We also learned to use VoTT to build our own dataset from scratch.

What's next for lifeguard.io
We want to publish our dataset so that future researchers can use the same data to create better models to save lives and we hope that eventually all personal and residential pools have a camera watching over them (a small cost in comparison to the cost of a pool) so that all drowning deaths that can be prevented are.
