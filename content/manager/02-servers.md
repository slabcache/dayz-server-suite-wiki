# Servers

Each entry under **Servers** in the sidebar is one DayZ server install, called
an _instance_ in places. Each has its own folder, ports, mods, settings, backups
and [Sentinel](sentinel) key. Run as many as the machine can handle: a main
server and a test one, say, or two maps.

Click a server's name to open its [Server](server) page. Under it are
[Mods](mods), [Config editor](config-editor), [Backups](backups) and
[Settings](settings). The circle beside the name shows whether it's running.

## Add a server

Press **+** next to **Servers**. You choose:

- **Instance name**, shown only in the Manager (up to 64 characters). The name
  players see is **Server name** in [Settings](settings).
- **Start from**:
  - **Empty folder**: a fresh install. Then install the server from the
    [Install tab](server).
  - **Copy of …**: copies another server's install, mods, settings and world.
    Logs and old mod versions are left out. Good for a test server.
  - **Restore …**: brings back a deleted server, with the date it was deleted.
- **Server build**: the normal DayZ server (Steam app 223350), or
  **Experimental** (1042420).

Each new server gets its own game port, 100 above the last (2302, 2402, 2502…),
so several can run at once. You can change it under **Settings → Launch
parameters**.

## Rename or delete

Hover the server in the sidebar and press the pencil (**Edit instance**) to
rename it.

**Delete instance** needs the server stopped and asks first. Nothing is erased:
the folder moves to `data/trash/`, and the server shows up under **Start from →
Restore** the next time you add one.

## Where the files are

Each server is a normal DayZ server folder, in `instances/instance<N>/` next to
the exe: `DayZServer_x64.exe`, `serverDZ.cfg`, `mpmissions/`, `profiles/`,
`keys/`, and a folder per mod (`@Name`). The Manager also keeps `mods.json` (the
load order) and `launch.json` (the launch parameters) there.
