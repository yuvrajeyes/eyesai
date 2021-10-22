const Course = require("../models/user.course");

const Lesson = [
  new Course({
    index: "Lesson 1",
    LessonName: "Introduction to Deep Learning for Computer Vision",
    Description:
      "Lecture 1 gives a broad introduction to computer vision and machine learning. We give a brief history of the two fields, starting in the 1950s and leading up to the modern explosion of deep neural networks. We preview some of the topics we will cover in the rest of the course, and discuss the enormous potential of deep learning and computer vision to improve our lives. We also discuss the logistics and philosophy of this course.",
    Slides: "http://myumi.ch/yKgM3",
    url: "https://www.youtube.com/embed/dJYGatp4SvA",
  }),
  new Course({
    index: "Lesson 2",
    LessonName: "Image Classification",
    Description:
      "Lecture 2 introduces image classification as a core computer vision problem. We see that the image classification task is made challenging by the semantic gap, but that solutions to this task can be used as a building block in other more complicated computer vision systems. We introduce machine learning as a data-driven approach to solving hard problems like image classification. We discuss several common classification datasets in computer vision. Finally we introduce K-Nearest Neighbors (KNN) as our first machine learning algorithm. This leads to a discussion of hyperparameters and cross-validation strategies that will be crucial for all the machine learning algorithms we will later use.",
    Slides: "http://myumi.ch/ovgw7",
    url: "https://www.youtube.com/embed/0nqvO3AM2Vw",
  }),
  new Course({
    index: "Lesson 3",
    LessonName: "Linear Classifier",
    Description:
      "Lecture 3 introduces linear classifiers as a solution to the linear classification problem. Linear classifiers are an example of a parametric learning algorithm, much like the neural networks that we will eventually study. We look at linear classifiers from algebraic, visual, and geometric viewpoints in order to gain intuition into the types of decisions they can make. We then introduce the idea of a loss function to quantify the performance of a linear classifier. We look at two common loss functions for linear classifiers: multiclass SVM and cross-entropy, and we discuss how these loss functions induce different preferences in our linear classifiers. We also introduce the idea of regularization to penalize overly complex models.",
    Slides: "http://myumi.ch/E38wn",
    url: "https://www.youtube.com/embed/qcSEP17uKKY",
  }),
  new Course({
    index: "Lesson 4",
    LessonName: "Optimization",
    Description:
      "Lecture 4 discusses optimization algorithms that are used to minimize loss functions discussed in the previous lecture. We introduce the core algorithm of gradient descent, and contrast numeric and analytic approaches to computing gradients. We discuss extensions to the basic gradient descent algorithm including stochastic gradient descent (SGD) and momentum. We also discuss more advanced first-order optimization algorithms such as AdaGrad, RMSProp, and Adam, and briefly discuss second-order optimization.",
    Slides: "http://myumi.ch/v2xAr",
    url: "https://www.youtube.com/embed/YnQJTfbwBM8",
  }),
  new Course({
    index: "Lesson 5",
    LessonName: "Neural Networks",
    Description:
      "Lecture 5 introduces fully-connected neural networks as a powerful nonlinear classifier. We start by discussing feature transforms plus linear classifiers as mechanism for nonlinear classification, then introduce neural networks as a mechanism for jointly learning a feature transform and a classifier. We briefly discuss differences between biological and artificial neurons. We see how fully-connected neural networks perform nonlinear classification via space warping, and discuss the universal approximation property for neural networks. We end with a brief discussion of convexity: linear classifiers give rise to convex optimization problems which are more amenable to optimization than the nonconvex optimization problems required to learn neural network classifiers.",
    Slides: "http://myumi.ch/bvnX5",
    url: "https://www.youtube.com/embed/g6InpdhUblE",
  }),
  new Course({
    index: "Lesson 6",
    LessonName: "Backpropagation",
    Description:
      "Lecture 6 discusses the backpropagation algorithm for efficiently computing gradients of complex functions. We discuss the idea of a computational graph as a data structure for organizing computation, and show how the backpropagation algorithm allows us to compute gradients by walking the graph backward and performing local computation at each graph node. We show examples of implementing backpropagation in code using both flat and modular implementations. We generalize the notion of backpropagation from scalar-valued functions to vector- and tensor-valued functions, and work through the concrete example of backpropagating through a matrix multiply operation. We conclude by briefly mentioning some extensions to the basic backpropagation algorithm including forward-mode automatic differentiation and computing higher-order derivatives.",
    Slides: "http://myumi.ch/R58q1",
    url: "https://www.youtube.com/embed/dB-u77Y5a6A",
  }),
  new Course({
    index: "Lesson 7",
    LessonName: "Convolutional Networks",
    Description:
      "Lecture 7 moves from fully-connected to convolutional networks by introducing new computational primitives that respect the spatial structure of 2D image data. We discuss convolution layers, which slide a learnable filter over the input data. We discuss pooling layers, which spatially downsample their input data. We then look at normalization layers including batch, layer, and instance normalization, which normalize their input data along different axes and improve training speed.",
    Slides: "http://myumi.ch/K43Zy",
    url: "https://www.youtube.com/embed/ANyxBVxmdZ0",
  }),
  new Course({
    index: "Lesson 8",
    LessonName: "CNN Architectures",
    Description:
      "Lecture 8 discusses guidelines for building convolutional neural networks. In the previous lecture we saw that convolutional networks are composed of convolutional layers, pooling layers, nonlinearities, normalization layers, and fully-connected layers; these layers can be combined in a nearly infinite variety of ways. This lecture attempts to bring some order to this multitude of choices by studying design patterns commonly used in historically significant CNN architectures. We also learn how to analyze CNN architectures in terms of their memory usage, parameter counts, and computational complexity. We study common architectures including AlexNet, VGG, GoogLeNet, Residual Networks, DenseNets, and MobileNets. We end with a brief discussion of recent work on neural architecture search.",
    Slides: "http://myumi.ch/xmg4d",
    url: "https://www.youtube.com/embed/XaZIlVrIO-Q",
  }),
  new Course({
    index: "Lesson 9",
    LessonName: "Hardware and Software",
    Description:
      "Lecture 9 gives an overview of the hardware and software systems used in deep learning. We contrast CPUs with graphics processing units (GPUs), and see how the massively parallel architecture of GPUs allows them to accelerate deep learning workloads, and how the rapidly improving hardware performance has been a driving force in deep learning. We also discuss the special-purpose hardware (tensor cores, tensor processing units) that have recently been introduced to further accelerate deep learning. On the software side, we focus on the two most widely used deep learning frameworks: PyTorch and TensorFlow. We see how these two frameworks realize the notion of a computational graph in software, and contrast dynamic vs static computational graphs.",
    Slides: "http://myumi.ch/PlkdR",
    url: "https://www.youtube.com/embed/oXPX8GIOiU4",
  }),
  new Course({
    index: "Lesson 10",
    LessonName: "Training Neural Networks I",
    Description:
      "Lecture 10 discusses many of the nuts-and-bolts details you need to think about when designing and training neural networks. We discuss different activation functions, and see how the classical sigmoid and hyperbolic tangent activations lead to vanishing gradients while more recent alternatives like rectified linear units (ReLU) mitigate this problem. We discuss data preprocessing and weight initialization and see how Xavier and MSRA initialization schemes make deep networks easier to train. We discuss common strategies for regularizing neural networks including dropout. We see how many regularizers fit into a common framework of adding noise during training, then averaging out the noise at test-time. Through this lens we discuss data augmentation, DropConnect, fractional pooling, stochastic depth, cutout, and Mixup.",
    Slides: "http://myumi.ch/0WeP9",
    url: "https://www.youtube.com/embed/lGbQlr1Ts7w",
  }),
  new Course({
    index: "Lesson 11",
    LessonName: "Training Neural Networks II",
    Description:
      "Lecture 11 continues our discussion of nuts-and-bolts details of training neural networks. We discuss different learning rate schedules for changing the learning rate over the course of training, including early stopping. We discuss strategies for choosing hyperparameters including grid and random search. We also walk through my personal strategy for choosing hyperparameters without hundreds of GPUs, and see how examining the shape of loss curves can help diagnose problems in neural network training. We also discuss model ensembling and see how transfer learning can help in situations with limited training data. Finally, we conclude with a discussion of distributed training: we see how models can be distributed across many devices or machines using data parallelism and model parallelism, and we discuss heuristics for scaling to very large training batches.",
    Slides: "http://myumi.ch/dO1DB",
    url: "https://www.youtube.com/embed/WUazOtlti0g",
  }),
  new Course({
    index: "Lesson 12",
    LessonName: "Recurrent Networks",
    Description:
      "Lecture 12 introduces recurrent neural networks (RNNs) as a new type of neural network that processes sequential data. We see how they can be used to solve new types of problems involving sequences, including many-to-one, one-to-many, and sequence-to-sequence problems. We discuss language modeling, and see how truncated backpropagation through time allows training RNNs on very long sequences. We see how recurrent networks allow us to solve new computer vision problems such as image captioning. We see how gradient flow is a crucial issue when training recurrent networks, and how Long Short Term Memory (LSTM) RNNs help avoid vanishing and exploding gradients.",
    Slides: "http://myumi.ch/Bo9jg",
    url: "https://www.youtube.com/embed/dUzLD91Sj-o",
  }),
  new Course({
    index: "Lesson 13",
    LessonName: "Attention",
    Description:
      "Lecture 13 introduces attention as a mechanism for deep networks to dynamically pay attention to different parts of their inputs. We see how recurrent networks can be augmented with attention, adding an interpretability to their predictions, and how neural attention can be seen as a coarse approximation of the saccades made by biological eyes. We see how early mechanisms for attention in recurrent networks can be generalized to yield attention and self-attention layers which can be used as standalone primitives in neural networks. We see how self-attention gives us a novel way to process sequences, leading to Transformer networks which use attention as their primary computational building block. We see how Transformers gracefully scale to very large data sets and model sizes, and have rapidly improved the state of the art in text generation.",
    Slides: "http://myumi.ch/qgvlw",
    url: "https://www.youtube.com/embed/YAgjfMR9R_M",
  }),
  new Course({
    index: "Lesson 14",
    LessonName: "Visualizing and Segmentation",
    Description:
      "Lecture 14 discusses mechanisms for visualizing and understanding the internal processing of neural networks, and shows how some of these same techniques can be used to generate novel images. We visualize CNN filters and maximally activating patches, and discuss techniques for extracting saliency maps from CNNs. We show how to invert convolutional networks by generating images with gradient ascent, and how this technique can also be used to synthesize adversarial examples. We see how the same strategy of gradient ascent can be used to generate artistic images, including DeepDream, texture synthesis, and neural style transfer.",
    Slides: "http://myumi.ch/QA8Bg",
    url: "https://www.youtube.com/embed/G1hGwHVykDU",
  }),
  new Course({
    index: "Lesson 15",
    LessonName: "Object Detection",
    Description:
      "Lecture 15 introduces object detection as the core computer vision task of localizing objects in images. We contrast this task with the image classification task we have mostly discussed so far, and see how we need new datasets (PASCAL, COCO), evaluation metrics (IoU, mAP), and neural network architectures to tackle this new task. We discuss the two-stage R-CNN family of methods for object detection including “slow” R-CNN, Fast R-CNN, and Faster R-CNN, and also briefly discuss single-stage approaches to object detection.",
    Slides: "http://myumi.ch/r80Pz",
    url: "https://www.youtube.com/embed/TB-fdISzpHQ",
  }),
  new Course({
    index: "Lesson 16",
    LessonName: "Detection and Segmentation",
    Description:
      "Lecture 16 continues our discussion of localizing objects in images with neural networks. We recap the R-CNN family of methods from the previous lecture and discuss how these networks behave differently during training and testing. We briefly discuss anchor-free object detectors such as CornerNet. We then move on to other localization tasks, and see how fully-convolutional networks can be used for semantic segmentation. This leads to a discussion of different methods of upsampling in neural networks, including max unpooling and transposed convolution. We then discuss the task of instance segmentation, where neural networks must both identify the object instances in each image as well as the pixels belonging to each object. We see how the Mask R-CNN architecture generalizes Faster R-CNN to perform instance segmentation. We briefly discuss other localization tasks including panoptic segmentation and keypoint estimation.",
    Slides: "http://myumi.ch/2Del3",
    url: "https://www.youtube.com/embed/9AyMR4IhSWQ",
  }),
  new Course({
    index: "Lesson 17",
    LessonName: "3D Vision",
    Description:
      "Lecture 17 discusses ways for incorporating 3D structure into neural networks. We talk about different representations for 3D data including depth maps, voxel grids, implicit functions, point clouds, and triangle meshes. We show how graph convolution is a neural network primitive that respects the structure of triangle meshes. We discuss metrics for comparing 3D shapes including intersection over union (IoU), Chamfer distance, and F1 scores. We briefly talk about camera systems, and specifically the difference between canonical and view-centric coordinate systems. We discuss datasets for 3D shape prediction including ShapeNet and Pix3D, and discuss the Mesh R-CNN architecture for performing joint object detection and 3D shape prediction.",
    Slides: "http://myumi.ch/jxDrl",
    url: "https://www.youtube.com/embed/S1_nCdLUQQ8",
  }),
  new Course({
    index: "Lesson 18",
    LessonName: "Videos",
    Description:
      "Lecture 18 discusses techniques for processing videos with neural networks. We see how single-frame CNNs are a strong baseline for video classification tasks, and how they can be improved with late fusion or early fusion. We contrast early and late fusion approaches with 3D CNNs that perform 3D convolution. We discuss optical flow, and see how two-stream networks use separate pathways for spatial and temporal information. We see how recurrent networks and self-attention can be utilized to capture long-term temporal information in videos. We discuss common architectures for video recognition, including C3D, I3D, and SlowFast networks.",
    Slides: "http://myumi.ch/51vGd",
    url: "https://www.youtube.com/embed/A9D6NXBJdwU",
  }),
  new Course({
    index: "Lesson 19",
    LessonName: "Generative Models I",
    Description:
      "Lecture 19 is the first of two lectures about generative models. We compare supervised and unsupervised learning, and also compare discriminative vs generative models. We discuss autoregressive generative models that explicitly model densities, including PixelRNN and PixelCNN. We discuss autoencoders as a method for unsupervised feature learning, and generalize them to variational autoencoders which are a type of generative model that use variational inference to maximize a lower-bound on the data likelihood.",
    Slides: "http://myumi.ch/7ZeAK",
    url: "https://www.youtube.com/embed/Q3HU2vEhD5Y",
  }),
  new Course({
    index: "Lesson 20",
    LessonName: "Generative Models II",
    Description:
      "Lecture 20 continues our discussion of generative models. We continue our discussion of variational autoencoders, and see how their latent space attempts to disentangle factors of variation in the data. We see how variational autoencoders can be used to sample new data, or to edit existing data. We briefly see how autoregressive and variational models can be combined, as in the VQ-VAE2 architecture. We then discuss generative adversarial networks (GANs) as a class of generative models that do not explicitly model probability densities. We show that at optimality, the distribution modeled by the generator in a GAN minimizes the Jensen-Shannon divergence (JSD) with the true data distribution. We discuss common GAN architectures including DC-GAN, WGAN, StyleGAN, and BigGAN. We see how GANs can be used for conditional generation tasks including class-conditional generation, text-to-image, image super-resolution, and image-to-image translation.",
    Slides: "http://myumi.ch/wlnXq",
    url: "https://www.youtube.com/embed/igP03FXZqgo",
  }),
  new Course({
    index: "Lesson 21",
    LessonName: "Reinforcement Learning",
    Description:
      "Lecture 21 gives a brief overview of reinforcement learning (RL). We discuss the reinforcement learning problem where an agent interacts with an environment and attempts to maximize a reward signal. We see how RL is more difficult than supervised learning due to challenges such as stochasticity, credit assignment, nondifferentiability, and nonstationarity. We formalize the RL problem as a Markov Decision Process (MDP), and see how value functions and Q-functions can express policies. We discuss value iteration and Q-learning as mechanisms for finding optimal policies, and see that training deep neural networks to approximate Q-functions gives rise to Deep Q-Learning. We also discuss policy gradients as an alternate method to learning optimal policies, and derive the REINFORCE algorithm.",
    Slides: "http://myumi.ch/mnN5y",
    url: "https://www.youtube.com/embed/Qex3XzcFKP4",
  }),
  new Course({
    index: "Lesson 22",
    LessonName: "Conclusion",
    Description:
      "Lecture 22 gives a summary and review of all the topics we covered this semester. After this summary, I spend the second half of the lecture talking about my thoughts on the future of computer vision and deep learning. We predict that new neural network architectures will continue to surprise us, such as Neural ODEs. Neural networks will continue to find new and surprising applications, such as learned data structures and symbolic mathematics. Deep networks will continue to use ever-increasing amounts of data and compute, and will take advantage of specialized hardware. We also identify some important open problems in computer vision including bias, lack of theoretical understanding, the need for low-shot and self-supervised learning algorithms, and the lack of “common sense” understanding in deep networks.",
    Slides: "http://myumi.ch/dO1bK",
    url: "https://www.youtube.com/embed/s3Ky_Ls4YSY",
  }),
];

module.exports = Lesson;
