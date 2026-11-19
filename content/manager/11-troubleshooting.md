# Troubleshooting

Fixes for the usual problems: a server that won't start or keeps restarting,
players who can't join, stuck downloads and config changes that don't show up.

## The server won't start

- Look at **Server output** on the [Server](server) page: the script log and RPT
  usually say why.
- A mod missing a dependency, or loaded above its framework, is the most common
  cause. Check the order on [Mods](mods).
- Turn on **Show server window** under **Settings → Launch parameters** to see
  the console.
- If the Visual C++ or DirectX runtime is missing, install it from
  [Manager settings](manager-settings).

## It keeps restarting

**Restart on crash or hang** gives up after 5 restarts in 15 minutes, so a
broken server doesn't loop forever. Fix the cause (usually a mod or a config
change; see the logs), then **Start** it by hand.

## Players can't find or join the server

- **Check** on the Server page tells you whether Steam lists it.
- Forward the game port and the next few (UDP) on your router, and allow
  `DayZServer_x64.exe` through Windows Firewall.
- Players need the same mods: their keys are in `keys/`, and **Verify
  signatures** is on by default.

## A download fails or hangs

- SteamCMD does one job at a time; the sidebar shows **Busy** while it's
  working.
- If it says **Not signed in**, sign in again under
  [Manager settings](manager-settings).
- **Verify** on the Install tab fixes damaged files.

## Config changes don't show up

Changes apply at the next server start. Changes to `serverDZ.cfg` saved while
the server runs wait until it stops or starts.

## Asking for help

**Export logs** in **Server output** saves everything someone needs to help you,
with passwords, keys and player IPs taken out.
