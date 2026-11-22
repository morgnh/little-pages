# what this site is

a hand-made personal site, not a portfolio. the metaphor is a storage closet: things get
made, hung up, moved around, and some shelves are empty on purpose.

live at https://morgnh.github.io/little-pages/ (GitHub Pages, `main` branch, root folder).

## the files

| file | what it is |
| --- | --- |
| `index.html` | the closet homepage: a 90s browser window with three drawers |
| `keepers-index.html` | clippings worth keeping, also a browser window |
| `widgets/index.html` | the widgets page: tab bar, three live widgets |
| `widgets/jellypet.html` | virtual pet, live canvas, feed and play |
| `widgets/tide-widget.html` | charleston harbor tide chart, baked-in snapshot |
| `widgets/banana-stand.html` | quote dispenser with a counter |
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
