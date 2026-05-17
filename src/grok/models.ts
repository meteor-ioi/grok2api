export interface ModelInfo {
  grok_model: [string, string];
  rate_limit_model: string;
  display_name: string;
  description: string;
  raw_model_path: string;
  default_temperature: number;
  default_max_output_tokens: number;
  supported_max_output_tokens: number;
  default_top_p: number;
  is_image_model?: boolean;
  is_video_model?: boolean;
}

export const MODEL_CONFIG: Record<string, ModelInfo> = {
  "grok-4.20-0309-non-reasoning": {
    grok_model: ["grok-420", "MODEL_MODE_FAST"],
    rate_limit_model: "grok-420",
    display_name: "Grok 4.20 0309 Non-Reasoning",
    description: "Grok 4.20 0309 Non-Reasoning chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-0309": {
    grok_model: ["grok-420", "MODEL_MODE_AUTO"],
    rate_limit_model: "grok-420",
    display_name: "Grok 4.20 0309",
    description: "Grok 4.20 0309 chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-0309-reasoning": {
    grok_model: ["grok-420", "MODEL_MODE_EXPERT"],
    rate_limit_model: "grok-420",
    display_name: "Grok 4.20 0309 Reasoning",
    description: "Grok 4.20 0309 reasoning chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-0309-non-reasoning-super": {
    grok_model: ["grok-420", "MODEL_MODE_FAST"],
    rate_limit_model: "grok-420-super",
    display_name: "Grok 4.20 0309 Non-Reasoning Super",
    description: "Grok 4.20 0309 Non-Reasoning Super chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-0309-super": {
    grok_model: ["grok-420", "MODEL_MODE_AUTO"],
    rate_limit_model: "grok-420-super",
    display_name: "Grok 4.20 0309 Super",
    description: "Grok 4.20 0309 Super chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-0309-reasoning-super": {
    grok_model: ["grok-420", "MODEL_MODE_EXPERT"],
    rate_limit_model: "grok-420-super",
    display_name: "Grok 4.20 0309 Reasoning Super",
    description: "Grok 4.20 0309 reasoning Super chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-0309-non-reasoning-heavy": {
    grok_model: ["grok-420", "MODEL_MODE_FAST"],
    rate_limit_model: "grok-420-heavy",
    display_name: "Grok 4.20 0309 Non-Reasoning Heavy",
    description: "Grok 4.20 0309 Non-Reasoning Heavy chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-0309-heavy": {
    grok_model: ["grok-420", "MODEL_MODE_AUTO"],
    rate_limit_model: "grok-420-heavy",
    display_name: "Grok 4.20 0309 Heavy",
    description: "Grok 4.20 0309 Heavy chat model (Super tokens required)",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-0309-reasoning-heavy": {
    grok_model: ["grok-420", "MODEL_MODE_EXPERT"],
    rate_limit_model: "grok-420-heavy",
    display_name: "Grok 4.20 0309 Reasoning Heavy",
    description: "Grok 4.20 0309 reasoning Heavy chat model (Super tokens required)",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-multi-agent-0309": {
    grok_model: ["grok-420", "MODEL_MODE_HEAVY"],
    rate_limit_model: "grok-420-heavy",
    display_name: "Grok 4.20 Multi-Agent 0309",
    description: "Grok 4.20 Multi-Agent 0309 chat model (Super tokens required)",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 65536,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-fast": {
    grok_model: ["grok-420", "MODEL_MODE_FAST"],
    rate_limit_model: "grok-420",
    display_name: "Grok 4.20 Fast",
    description: "Grok 4.20 Fast chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-auto": {
    grok_model: ["grok-420", "MODEL_MODE_AUTO"],
    rate_limit_model: "grok-420",
    display_name: "Grok 4.20 Auto",
    description: "Grok 4.20 Auto chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-expert": {
    grok_model: ["grok-420", "MODEL_MODE_EXPERT"],
    rate_limit_model: "grok-420",
    display_name: "Grok 4.20 Expert",
    description: "Grok 4.20 Expert chat model",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.20-heavy": {
    grok_model: ["grok-420", "MODEL_MODE_HEAVY"],
    rate_limit_model: "grok-420-heavy",
    display_name: "Grok 4.20 Heavy",
    description: "Grok 4.20 Heavy chat model (Super tokens required)",
    raw_model_path: "xai/grok-420",
    default_temperature: 1.0,
    default_max_output_tokens: 65536,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-4.3-beta": {
    grok_model: ["grok-420-computer-use-sa", "MODEL_MODE_GROK_4_3"],
    rate_limit_model: "grok-4.3-beta",
    display_name: "Grok 4.3 Beta",
    description: "Grok 4.3 Beta computer use model (Super tokens required)",
    raw_model_path: "xai/grok-420-computer-use-sa",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
  },
  "grok-imagine-image-lite": {
    grok_model: ["grok-3", "MODEL_MODE_FAST"],
    rate_limit_model: "grok-3",
    display_name: "Grok Imagine Image Lite",
    description: "Image generation model",
    raw_model_path: "xai/grok-imagine-image-lite",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
    is_image_model: true,
  },
  "grok-imagine-image": {
    grok_model: ["grok-3", "MODEL_MODE_AUTO"],
    rate_limit_model: "grok-3",
    display_name: "Grok Imagine Image",
    description: "Image generation model",
    raw_model_path: "xai/grok-imagine-image",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
    is_image_model: true,
  },
  "grok-imagine-image-pro": {
    grok_model: ["grok-3", "MODEL_MODE_AUTO"],
    rate_limit_model: "grok-3",
    display_name: "Grok Imagine Image Pro",
    description: "Image generation model",
    raw_model_path: "xai/grok-imagine-image-pro",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
    is_image_model: true,
  },
  "grok-imagine-image-edit": {
    grok_model: ["imagine-image-edit", "MODEL_MODE_AUTO"],
    rate_limit_model: "grok-3",
    display_name: "Grok Imagine Image Edit",
    description: "Image edit model",
    raw_model_path: "xai/grok-imagine-image-edit",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
    is_image_model: true,
  },
  "grok-imagine-video": {
    grok_model: ["grok-3", "MODEL_MODE_AUTO"],
    rate_limit_model: "grok-3",
    display_name: "Grok Imagine Video",
    description: "Video generation model",
    raw_model_path: "xai/grok-imagine-video",
    default_temperature: 1.0,
    default_max_output_tokens: 8192,
    supported_max_output_tokens: 131072,
    default_top_p: 0.95,
    is_video_model: true,
  },
};

export function isValidModel(model: string): boolean {
  return Boolean(MODEL_CONFIG[model]);
}

export function getModelInfo(model: string): ModelInfo | null {
  return MODEL_CONFIG[model] ?? null;
}

export function toGrokModel(model: string): { grokModel: string; mode: string; isVideoModel: boolean } {
  const cfg = MODEL_CONFIG[model];
  if (!cfg) return { grokModel: model, mode: "MODEL_MODE_FAST", isVideoModel: false };
  return { grokModel: cfg.grok_model[0], mode: cfg.grok_model[1], isVideoModel: Boolean(cfg.is_video_model) };
}

export function toRateLimitModel(model: string): string {
  return MODEL_CONFIG[model]?.rate_limit_model ?? model;
}

