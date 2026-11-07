# abdullahformuli: a whole film, worked

The workspace of Abdullah Formuli's film (@abdullahformuli) in the engine, as a worked
example of everything an agent writes for one creator:
- `film.json` (the creator research, X timeline wall roles, counter milestones, and end card)
- `toy.json` (the 3D vinyl engineer toy specification: colors, finish, and joints)
- `recipes/` (custom procedural wall generation recipes)

The film opens with the creator's X profile card, where the avatar peels off the timeline surface, puffs into a glossy 3D vinyl engineer toy, and navigates standing monolithic walls displaying public daily shipping posts ("Day 54 of shipping until I Land SWE or YC", "scroll-craft", "career-ops"). 3D numerals rise out of the timeline floor before resolving onto an author desk end card with `@abdullahformuli`.

## Running it

1. Copy this folder into your workspace (`videos/abdullahformuli/`).
2. Provide assets in `assets/`: `avatar-real.jpg`, `banner-real.jpg`, `pinned-cover.jpg`.
3. Run the engine commands:
   ```bash
   FILM=videos/abdullahformuli node skills/creator-toy-intro/engine/run.mjs data
   FILM=videos/abdullahformuli node skills/creator-toy-intro/engine/run.mjs storyboard
   FILM=videos/abdullahformuli node skills/creator-toy-intro/engine/run.mjs render
   ```
