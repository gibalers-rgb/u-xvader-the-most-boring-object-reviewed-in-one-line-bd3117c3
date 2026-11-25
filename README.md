# The Most Boring Object, Reviewed in One Line

[![make.fun · u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/gibalers-rgb/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/gibalers-rgb/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

One line, a review of the most boring everyday object I could name — a
coaster — under 200 characters, and nothing else:

> The coaster has one job — sit under the glass — yet it still ends up glued to the bottom every time, riding to the sink like it did the drinking.

The joke is a true, recognisable detail: a cold glass sweats, the coaster
sticks to its bottom, and it rides along to the sink as if it did the
drinking. The turn lands in the final clause — the reader expects a complaint
about a useless object, and gets the smaller, funnier picture instead: the
coaster thinks it earned the trip. It is the line you would repeat to someone
doing the dishes next to you.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt` — exactly the line above, 145 characters, a
single line, no trailing newline. For a local run without touching `/output`:

```sh
OUTPUT_DIR=out node main.ts
```

`main.ts` validates the line before writing (1–200 characters, single line,
not only white space) and re-reads the file afterwards to confirm it matches
byte for byte. Deterministic, standard library only, no network, no secrets.
