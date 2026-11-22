# what this site is

a hand-made personal site, not a portfolio. the metaphor is a storage closet: things get
made, hung up, moved around, and some shelves are empty on purpose.

live at https://morgnh.github.io/little-pages/ (GitHub Pages, `main` branch, root folder).

## the files

| file | what it is |
| --- | --- |
| `index.html` | the closet homepage: a 90s browser window with three drawers |
| `keepers-index.html` | clippings worth keeping, also a browser window |
| `cabinet.html` | **the cabinet**: every widget on its own plinth, all running live |
| `widgets/index.html` | the widget shelf: tab bar, three live widgets |
| `widgets/jellypet.html` | virtual pet, live canvas, feed and play. also its own page in the ring |
| `widgets/tide-widget.html` | charleston harbor tide chart, baked-in snapshot. also its own page in the ring |
| `widgets/banana-stand.html` | quote dispenser with a counter. also its own page in the ring |
| `widgets/now-page.html` | reading, making, into. saved in the browser. also an exhibit |
| `widgets/color-mixer.html` | two paints, ratio, the mix and its opposite. also an exhibit |
| `widgets/badge-maker.html` | 88x31 badge maker, saves a png. also an exhibit |
| `widgets/moon-phase.html` | tonight's moon plus 30 nights, 1998 windows and starfield. also an exhibit |
| `widgets/moon-phase-clean.html` | the cream version of the same page, kept for comparison |
| `widgets/pet-roll-call.html` | the three animals, with boop counters. also an exhibit |
| `widgets/rabbit-hole.html` | one button, thirty topics. also an exhibit |
| `widgets/README.md` | notes on the widgets and how to host them |

## house style

One look, applied everywhere, so the site reads as one place:

- teal desktop `#008080` with a faint 4px checker texture, gray page `#c0c0c0`
- windows: 2px bevels, one outset, one inset, drop shadow offset `8px 8px`
- title bar: `#000080` to `#1084d0` gradient, 13px bold Tahoma
- text: Times for reading, Tahoma for window furniture, Courier for labels and dates
- lowercase everywhere, via `text-transform`
- links blue `#0000ee`, visited `#551a8b`
- no external fonts, no CDNs. one small local script, `webring.js`, draws the page ring at the bottom.
  every page is otherwise one file.

## how to add a drawer

1. copy one of the `.drawer` links in `index.html`, keep the bevel classes
2. point `href` at the new page or folder, change the `--c` colour on the icon tile
3. swap the inline svg for something that fits
4. add a line to the `recently` log with today's date

## how the widgets page works

The three widgets are embedded inside `widgets/index.html` as copies, each in its own
iframe, so their CSS and JS can't collide. That means the page is self-contained but not
live-linked: **editing `widgets/jellypet.html` does not change the page.** Edit the copies
in the generator, rebuild, and re-upload, or edit the embedded copy by hand in the page.

Each panel carries a fixed `data-w` / `data-h`, measured at the widget's real size, and the
page scales the frame down when the window is narrow. If you change a widget's layout,
re-measure and update those numbers.

## how the cabinet works

`cabinet.html` is a display case, not a list. Each exhibit is that widget loaded live in
an iframe, so the thing on the shelf is the thing itself, buttons and all.

Each entry in the `EXHIBITS` array carries the widget's **real measured size**. The frame
takes that shape and the widget is scaled down, never reshaped. That matters: an earlier
version guessed heights and cropped the bottoms off half the shelf. If you change a
widget's layout, re-measure it and update its two numbers, or the case will letterbox
or clip.

`MAXH` caps how tall a portrait widget can get (jellypet is 380x930). Empty plinths are
listed in `PLANNED` on purpose, same rule as the empty drawers.

## zones

Pages are allowed to disagree with each other inside the same chrome. The homepage is gray
and papery, the widgets page is a dark screen in a gray window. That's the intent, not an
inconsistency to fix.

## editing notes

- GitHub Pages caches for a few minutes. After a commit, hard reload (Ctrl+Shift+R)
  before concluding something is broken.
- The web editor is fine for small edits. For the widgets page, upload the rebuilt file
  rather than pasting 40 KB into the text box.
- Keep the `recently` log current. A dated changelog going back years is most of what
  makes these sites feel alive.
