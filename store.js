import { 
  Activity, Sun, Brain, Moon, Wind, RefreshCw, Users, Layers, 
  Play, Dumbbell // <--- Added missing icons here
} from 'lucide-react-native';

export const AI_RESPONSES = {
  default: "I recommend a 'Physiological Sigh' protocol to reset your baseline state immediately.",
  sleep: "If you can't sleep, do NOT stay in bed. Get up, move to a dim room, and try the 'NSDR' protocol.",
  meeting: "For high-stakes meetings: 10 mins Zone 2 Cardio followed by 5 mins Box Breathing.",
  hungover: "Acute Recovery needed: 1L Water + Electrolytes immediately. Cold shower (3 mins).",
  stress: "High Cortisol detected. Disengage from screens. Panoramic vision needed.",
  focus: "Deploy 'Brown Noise'. Phone in another room. Set timer for 90 mins."
};

export const PROTOCOL_DB = [
  // --- EXISTING PROTOCOLS ---
  {
    id: 'stack-morning',
    title: 'The Morning Launchpad',
    category: 'Stack',
    type: 'stack',
    content: ['phys-4', 'phys-3', 'conn-1'],
    minEnergy: 10, minTime: 20, locations: ['Home Base', 'Hotel Room'],
    description: 'The ultimate 20-min sequence to wake up the nervous system.',
    icon: Layers, color: 'text-purple-400', bgColor: 'bg-purple-900/20'
  },
  {
    id: 'phys-1',
    title: 'Zone 2 Cardio',
    category: 'Physiological',
    type: 'timer',
    duration: 1800,
    minEnergy: 50, minTime: 30, locations: ['Home Base', 'Gym', 'Outdoors'],
    description: 'Steady state movement to build metabolic base.',
    steps: ['Maintain nasal breathing', 'Keep HR 130-150bpm', 'No dopamine inputs'],
    icon: Activity, color: 'text-amber-400', bgColor: 'bg-amber-900/20'
  },
  {
    id: 'phys-3',
    title: 'Morning Sunlight',
    category: 'Physiological',
    type: 'timer',
    duration: 600,
    minEnergy: 5, minTime: 10, locations: ['Anywhere', 'Outdoors'],
    description: 'Circadian anchor. Critical for jet lag adjustment.',
    steps: ['Go outside', 'Face East', 'No sunglasses'],
    icon: Sun, color: 'text-amber-400', bgColor: 'bg-amber-900/20'
  },
  {
    id: 'cog-1',
    title: 'Deep Work Sprint',
    category: 'Cognitive',
    type: 'timer',
    duration: 5400,
    minEnergy: 65, minTime: 60, locations: ['Home Base', 'Office'],
    description: 'High-leverage cognitive output. Zero distraction.',
    icon: Brain, color: 'text-blue-400', bgColor: 'bg-blue-900/20'
  },
  {
    id: 'rest-1',
    title: 'NSDR / Yoga Nidra',
    category: 'Restoration',
    type: 'audio_sim',
    duration: 1200,
    minEnergy: 1, minTime: 20, locations: ['Quiet Space'],
    description: 'Non-Sleep Deep Rest. Resets dopamine baseline.',
    icon: Moon, color: 'text-indigo-400', bgColor: 'bg-indigo-900/20'
  },
  {
    id: 'rest-2',
    title: 'Physiological Sigh',
    category: 'Restoration',
    type: 'timer', // Changed to timer for simplicity in v1
    duration: 180, // 3 mins
    minEnergy: 5, minTime: 3, locations: ['Anywhere'],
    description: 'Immediate stress reduction. Double inhale, long exhale.',
    steps: ['Inhale deeply through nose', 'Top it up with a second sip', 'Long exhale through mouth'],
    icon: Wind, color: 'text-blue-300', bgColor: 'bg-blue-900/20'
  },
  {
    id: 'rest-3',
    title: 'Contrast Shower',
    category: 'Restoration',
    type: 'timer',
    duration: 600,
    minEnergy: 30, minTime: 10, locations: ['Home Base', 'Hotel Room'],
    description: 'Vascular dilation/constriction for recovery.',
    steps: ['3m Hot', '1m Cold', 'Repeat 3x', 'End Cold'],
    icon: RefreshCw, color: 'text-emerald-400', bgColor: 'bg-emerald-900/20'
  },
  
  // --- NEW STUART PROTOCOLS ---
  {
    id: 'clean-1',
    title: 'Domestic Athlete',
    category: 'Physiological',
    type: 'timer',
    duration: 1200, // 20 mins
    minEnergy: 20, minTime: 20, locations: ['Home Base'],
    description: 'High-tempo cleaning session. Cleaning is movement.',
    steps: ['Put on upbeat playlist', 'Set timer', 'Go fast - keep HR up'],
    icon: RefreshCw, color: 'text-emerald-400', bgColor: 'bg-emerald-900/20'
  },
  {
    id: 'hotel-pump',
    title: 'Hotel Room Pump',
    category: 'Physiological',
    type: 'checklist', // Checklist type usually renders steps
    minEnergy: 40, minTime: 15, locations: ['Hotel Room', 'Home Base'],
    description: 'Anti-skinny-fat protocol. Resistance builds tone.',
    steps: ['20 Pushups', '20 Squats', '1 min Plank', 'Repeat 4x'],
    icon: Dumbbell, color: 'text-amber-400', bgColor: 'bg-amber-900/20'
  },
  {
    id: 'run-survivor',
    title: 'Treadmill Theater',
    category: 'Physiological',
    type: 'timer',
    duration: 2700, // 45 mins
    minEnergy: 50, minTime: 45, locations: ['Gym', 'Outdoors'],
    description: 'Zone 2 Cardio while watching Survivor.',
    steps: ['Open Netflix/YouTube', 'Start Survivor', 'Maintain nasal breathing'],
    icon: Play, color: 'text-purple-400', bgColor: 'bg-purple-900/20'
  },
  {
    id: 'conn-disconnect',
    title: 'Disconnection',
    category: 'Connection',
    type: 'timer',
    duration: 1800, // 30 mins
    minEnergy: 10, minTime: 30, locations: ['Home Base', 'Restaurant'],
    description: 'Partner Sync. Phone Down. Eyes Up.',
    steps: ['Set phone to DND', 'Place face down', 'Be present'],
    icon: Users, color: 'text-indigo-400', bgColor: 'bg-indigo-900/20'
  },
];