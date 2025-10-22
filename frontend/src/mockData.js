export const mockProjects = [
  {
    id: 1,
    title: "CoMuRoS: Multi-Robot Manager-Worker LLM System",
    category: ["AI/ML", "Multi-Robot"],
    description: "Collaborative multi-robot orchestration system using Large Language Models for task allocation and coordination.",
    techStack: ["Python", "ROS 2", "LLMs", "Multi-Agent Systems"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    featured: true,
    problem: "Coordinating multiple robots for complex tasks requires intelligent task allocation and real-time communication.",
    approach: "Developed a manager-worker architecture where LLMs handle high-level planning while workers execute tasks autonomously.",
    results: "40% improvement in task completion time, 95% success rate in multi-robot coordination scenarios.",
    video: "https://example.com/comuros-demo.mp4",
    code: "https://github.com/username/comuros",
    metrics: {
      performance: "40% faster",
      accuracy: "95% success rate",
      scalability: "Up to 8 robots"
    }
  },
  {
    id: 2,
    title: "GR00T Vision-Language Model Finetuning Pipeline",
    category: ["AI/ML", "Vision"],
    description: "Custom finetuning pipeline for robot manipulation using vision-language models.",
    techStack: ["Python", "PyTorch", "VLM", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800",
    featured: true,
    problem: "General-purpose VLMs lack domain-specific understanding for robotics manipulation tasks.",
    approach: "Built end-to-end finetuning pipeline with custom robotics dataset and training optimization.",
    results: "32% improvement in manipulation task understanding, 28% faster inference time.",
    video: "https://example.com/groot-demo.mp4",
    code: "https://github.com/username/groot-pipeline",
    metrics: {
      accuracy: "89% task success",
      speed: "28% faster",
      dataset: "10K+ annotations"
    }
  },
  {
    id: 3,
    title: "Sensor Fusion for Autonomous Navigation",
    category: ["Vision", "Control"],
    description: "LiDAR and camera fusion system for robust autonomous navigation in complex environments.",
    techStack: ["C++", "ROS 2", "LiDAR", "Computer Vision", "Kalman Filter"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
    featured: true,
    problem: "Single sensor modalities fail in challenging lighting or texture-less environments.",
    approach: "Implemented multi-sensor fusion with temporal consistency and real-time processing.",
    results: "99.2% localization accuracy, robust operation in indoor/outdoor transitions.",
    video: "https://example.com/sensor-fusion-demo.mp4",
    code: "https://github.com/username/sensor-fusion",
    metrics: {
      accuracy: "99.2%",
      latency: "<15ms",
      robustness: "All weather"
    }
  },
  {
    id: 4,
    title: "TurtleBot3 Model Predictive Control",
    category: ["Control"],
    description: "MPC implementation for optimal trajectory tracking on TurtleBot3 platform.",
    techStack: ["Python", "ROS 2", "MPC", "Optimization"],
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800",
    featured: false,
    problem: "Traditional PID control fails to optimize trajectories while respecting robot constraints.",
    approach: "Designed MPC controller with real-time optimization and constraint handling.",
    results: "35% smoother trajectories, 22% energy savings compared to baseline.",
    video: "https://example.com/turtlebot-mpc.mp4",
    code: "https://github.com/username/turtlebot-mpc"
  },
  {
    id: 5,
    title: "Unitree Go2 Quadruped Locomotion",
    category: ["Control", "AI/ML"],
    description: "Reinforcement learning based locomotion control for quadruped robot.",
    techStack: ["Python", "PyTorch", "RL", "IsaacGym"],
    image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=800",
    featured: false,
    problem: "Hand-designed gaits struggle with uneven terrain and dynamic environments.",
    approach: "Trained RL policies in simulation with domain randomization for sim-to-real transfer.",
    results: "Stable locomotion on stairs, grass, and uneven terrain. 10+ hours continuous operation.",
    code: "https://github.com/username/go2-locomotion"
  },
  {
    id: 6,
    title: "SO-101 Robotic Arm Manipulation Dataset",
    category: ["AI/ML", "Vision"],
    description: "Large-scale dataset for robotic manipulation with multi-modal sensor data.",
    techStack: ["Python", "ROS 2", "Dataset Tools", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800",
    featured: false,
    problem: "Lack of standardized datasets for robotic manipulation research.",
    approach: "Created dataset collection pipeline with synchronized multi-sensor recording and annotation tools.",
    results: "15K+ manipulation sequences, 50+ object categories, open-sourced for research.",
    code: "https://github.com/username/so101-dataset"
  }
];

export const mockPublications = [
  {
    id: 1,
    title: "CoMuRoS: Collaborative Multi-Robot Systems with Large Language Models",
    authors: "Your Name, Co-Author 1, Co-Author 2",
    venue: "IROS 2024",
    year: 2024,
    type: "Conference",
    link: "https://arxiv.org/",
    pdf: "https://arxiv.org/paper.pdf"
  },
  {
    id: 2,
    title: "Vision-Language Models for Robot Manipulation: A Finetuning Approach",
    authors: "Your Name, Advisor Name",
    venue: "arXiv preprint",
    year: 2024,
    type: "Preprint",
    link: "https://arxiv.org/"
  },
  {
    id: 3,
    title: "Multi-Sensor Fusion for Robust Autonomous Navigation",
    authors: "Your Name, Team Members",
    venue: "ICRA 2023",
    year: 2023,
    type: "Conference",
    link: "https://ieeexplore.ieee.org/",
    pdf: "https://ieeexplore.ieee.org/paper.pdf"
  }
];

export const mockSkills = {
  "Programming Languages": ["Python", "C++", "MATLAB", "JavaScript"],
  "Robotics Frameworks": ["ROS 2", "ROS 1", "MoveIt", "Gazebo", "IsaacGym"],
  "AI/ML": ["PyTorch", "TensorFlow", "Reinforcement Learning", "Computer Vision", "Vision-Language Models"],
  "Hardware": ["TurtleBot3", "Unitree Go2", "SO-101 Arm", "LiDAR", "Depth Cameras"],
  "Control Systems": ["MPC", "Optimal Control", "State Estimation", "Kalman Filters"],
  "Computer Vision": ["OpenCV", "PCL", "Sensor Fusion", "SLAM", "Object Detection"],
  "Tools": ["Git", "Docker", "Linux", "CMake", "CI/CD"]
};

export const mockTalks = [
  {
    id: 1,
    title: "Multi-Robot Coordination with LLMs",
    event: "IROS 2024 Workshop",
    location: "Abu Dhabi, UAE",
    date: "October 2024",
    type: "Conference Talk"
  },
  {
    id: 2,
    title: "Demo: CoMuRoS System at IITGN Robotics Lab",
    event: "IITGN Open House",
    location: "Gandhinagar, India",
    date: "March 2024",
    type: "Live Demo"
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "Getting Started with ROS 2 Humble",
    excerpt: "A practical guide to setting up ROS 2 Humble for robotics development.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["ROS 2", "Tutorial"]
  },
  {
    id: 2,
    title: "Model Predictive Control for Mobile Robots",
    excerpt: "Understanding MPC implementation and tuning for wheeled robots.",
    date: "2024-02-22",
    readTime: "12 min read",
    tags: ["Control", "MPC"]
  },
  {
    id: 3,
    title: "Vision-Language Models in Robotics",
    excerpt: "Exploring the latest VLM architectures for robot manipulation tasks.",
    date: "2024-03-10",
    readTime: "10 min read",
    tags: ["AI/ML", "VLM"]
  }
];