
> are-we-there-yet@1.1.5 test /Users/mperrotte/npminc/are-we-there-yet
> standard && tap test/*.js

TAP version 13
ok 1 - test/tracker.js # time=42.865ms {
    # Subtest: initialization
        ok 1 - Nothing todo is 0 completion
        1..1
    ok 1 - initialization # time=3.208ms
    
    # Subtest: completion
        ok 1 - Nothing done is 0 completion
        ok 2 - completeWork: 100% completed
        ok 3 - completeWork: on change event fired
        ok 4 - completeWork: on change emits the correct name
        1..4
    ok 2 - completion # time=14.672ms
    
    # Subtest: add more work
        ok 1 - addWork: 50% completed
        ok 2 - addWork: on change event fired
        ok 3 - addWork: on change emits the correct name
        1..3
    ok 3 - add more work # time=13.886ms
    
    # Subtest: complete more work
        ok 1 - completeWork: Over completion is still only 100% complete
        1..1
    ok 4 - complete more work # time=1.224ms
    
    # Subtest: finish is always 100%
        ok 1 - finish: Explicitly finishing moves to 100%
        1..1
    ok 5 - finish is always 100% # time=1.276ms
    
    1..5
    # time=42.865ms
}

ok 2 - test/trackergroup.js # time=100.377ms {
    # Subtest: TrackerGroup
        ok 1 - Nothing todo is 0 completion
        ok 2 - finishEmpty: on change event fired
        ok 3 - finishEmpty: on change emits the correct name
        ok 4 - finishEmpty: passed through completion was correct
        ok 5 - finishEmpty: Finishing an empty group actually finishes it
        ok 6 - Initially empty
        ok 7 - on change event fired
        ok 8 - on change emits the correct name
        ok 9 - Complete half of one is a quarter overall
        ok 10 - Complete half of one is a quarter overall
        ok 11 - finishAll: on change event fired
        ok 12 - finishAll: on change emits the correct name
        ok 13 - Finishing everything
        ok 14 - Finishing everything
        ok 15 - weighted: Initially empty
        ok 16 - weighted: on change event fired
        ok 17 - weighted: on change emits the correct name
        ok 18 - weighted: Complete half of double weighted
        ok 19 - weighted: Complete half of double weighted
        ok 20 - weightedFinishAll: on change event fired
        ok 21 - weightedFinishAll: on change emits the correct name
        ok 22 - weightedFinishaAll: Finishing everything
        ok 23 - weightedFinishaAll: Finishing everything
        ok 24 - nested: Initially quarter done
        ok 25 - nestedComplete: on change event fired
        ok 26 - nestedComplete: on change emits the correct name
        ok 27 - nestedComplete: Finishing everything
        ok 28 - nestedComplete: Finishing everything
        1..28
    ok 1 - TrackerGroup # time=82.465ms
    
    Error: Attempted to add tracker group top to tree that already includes it top
        at module.exports.TrackerGroup.addUnit (/Users/mperrotte/npminc/are-we-there-yet/tracker-group.js:42:15)
        at testCycle (/Users/mperrotte/npminc/are-we-there-yet/test/trackergroup.js:89:13)
        at Test.<anonymous> (/Users/mperrotte/npminc/are-we-there-yet/test/trackergroup.js:82:3)
        at TapWrap.runInAsyncScope (async_hooks.js:194:21)
        at Test.cb.args (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/test.js:145:40)
        at ret (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/test.js:383:21)
        at Test.main (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/test.js:390:7)
        at TapWrap.runInAsyncScope (async_hooks.js:194:21)
        at Test.runMain (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/base.js:193:15)
        at writeSubComment (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/test.js:499:13)
    # Subtest: cycles
        ok 1 - top
    Error: Attempted to add tracker group top to tree that already includes it top/layer1
        at module.exports.TrackerGroup.addUnit (/Users/mperrotte/npminc/are-we-there-yet/tracker-group.js:42:15)
        at testCycle (/Users/mperrotte/npminc/are-we-there-yet/test/trackergroup.js:89:13)
        at Test.<anonymous> (/Users/mperrotte/npminc/are-we-there-yet/test/trackergroup.js:84:3)
        at TapWrap.runInAsyncScope (async_hooks.js:194:21)
        at Test.cb.args (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/test.js:145:40)
        at ret (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/test.js:383:21)
        at Test.main (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/test.js:390:7)
        at TapWrap.runInAsyncScope (async_hooks.js:194:21)
        at Test.runMain (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/base.js:193:15)
        at writeSubComment (/Users/mperrotte/npminc/are-we-there-yet/node_modules/tap/lib/test.js:499:13)
        ok 2 - top
        1..2
    ok 2 - cycles # time=11.873ms
    
    # Subtest: should properly handle finish calls when the group contains a stream
        ok 1 - did not error on `finish()` call
        1..1
    ok 3 - should properly handle finish calls when the group contains a stream # time=1.558ms
    
    1..3
    # time=100.377ms
}

ok 3 - test/trackerstream.js # time=45.992ms {
    # Subtest: TrackerStream
        1..9
        ok 1 - Nothing todo is 0 completion
        ok 2 - Nothing done is 0 completion
        ok 3 - write: on change event fired
        ok 4 - write: on change emits the correct name
        ok 5 - write: 100% completed
        ok 6 - addWork: on change event fired
        ok 7 - addWork: 50% completed
        ok 8 - allWork: on change event fired
        ok 9 - allWork: 100% completed
    ok 1 - TrackerStream # time=42.478ms
    
    1..1
    # time=45.992ms
}

1..3
# time=957.184ms
-------------------|----------|----------|----------|----------|-------------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |    92.31 |    68.75 |    86.96 |    91.87 |                   |
 index.js          |      100 |      100 |      100 |      100 |                   |
 tracker-base.js   |      100 |      100 |      100 |      100 |                   |
 tracker-group.js  |    89.74 |     62.5 |    83.33 |    88.89 |... 00,101,103,106 |
 tracker-stream.js |    90.48 |       50 |       80 |    90.48 |             29,30 |
 tracker.js        |      100 |      100 |      100 |      100 |                   |
-------------------|----------|----------|----------|----------|-------------------|
