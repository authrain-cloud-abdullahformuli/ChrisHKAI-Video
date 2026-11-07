# The Films

Worked examples of films built with the `creator-toy-intro` skill, demonstrating briefs, part definitions, procedural audio scripts, and Blender Cycles rendering.

| Film | What It Is | How It Was Made | Profile |
| --- | --- | --- | --- |
| [abdullahformuli-intro](../skills/creator-toy-intro/example/abdullahformuli) | 30 s cinematic self-intro for Abdullah Formuli (@abdullahformuli): avatar peels off the X timeline into a 3D vinyl engineer mascot, standing daily ship walls rise, and 55+ public ship milestones elevate | Node + Blender Cycles + procedural audio synthesizer; full worked example in `skills/creator-toy-intro/example/abdullahformuli/` | [@abdullahformuli](https://x.com/abdullahformuli) |

The sound in every film is synthesized by its own `scripts/sound.py` (or `score.py`), producing high-fidelity audio without external audio dependencies.

## Film Structure

Each film workspace contains:
1. `film.json` — The creator brief, extracted posts, counter metrics, and typography settings.
2. `toy.json` — The 3D vinyl toy specification (colors, finish, joints, and signatures).
3. `recipes/` — Custom Python recipes for procedural walls, pedestals, and props.
