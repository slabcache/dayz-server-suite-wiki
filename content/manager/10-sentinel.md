# Sentinel

**Sentinel** is a small server-side mod that links the game to the Manager.
Players don't download it, and it isn't on the Workshop. It's optional: without
it the server runs fine, but you lose:

- the live **player list** and player charts
- **messages** to everyone in chat
- **chat warnings** before scheduled, manual and update restarts
- **freeze detection** (a server that's still running but has stopped
  responding)

## Install it

On the [Server](server) page, **Sentinel** panel, press **Get Sentinel**. It
downloads the latest release and adds `-servermod=@Sentinel` to the launch.
**Update available** shows when a newer one is out, and **Update Sentinel**
installs it. Installing or updating needs the server stopped.

**Load Sentinel** turns it off or on without removing it. Turning it off asks
first and applies at the next start.

## The key

Each server has its own **Sentinel key**, which Sentinel uses to prove it's
talking for that server. **Show** and **Copy** reveal it. **Rotate** makes a new
one if it ever leaked; it takes effect at the next start.

## How it connects

Sentinel talks only to the Manager on this machine (`localhost`). It never
contacts anything on the internet.

## If players don't show up

- The panel says **Waiting for Sentinel** for a minute or so after the start,
  until the mission has loaded.
- Check that **Load Sentinel** is on, and that the server was started after
  installing it.
- Look in **Server output → Script log** for lines from Sentinel.
