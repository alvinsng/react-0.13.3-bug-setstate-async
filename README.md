# react-0.13.3-bug-setstate-async
demo of bug

```
~/work/react-render-state-bug  (master) $ node index.js 
output <div data-reactid=".1l6bhku4xds" data-react-checksum="664014317">hi</div>

ReferenceError: document is not defined
    at getActiveElement (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/getActiveElement.js:23:12)
    at ReactReconcileTransaction.ReactInputSelection.getSelectionInformation (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/ReactInputSelection.js:40:23)
    at ReactReconcileTransaction.Mixin.initializeAll (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/Transaction.js:168:30)
    at ReactReconcileTransaction.Mixin.perform (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/Transaction.js:133:12)
    at ReactUpdatesFlushTransaction.Mixin.perform (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/Transaction.js:134:20)
    at ReactUpdatesFlushTransaction.assign.perform (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/ReactUpdates.js:95:38)
    at Object.flushBatchedUpdates (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/ReactUpdates.js:175:19)
    at Object.wrapper [as flushBatchedUpdates] (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/ReactPerf.js:70:21)
    at ReactDefaultBatchingStrategyTransaction.Mixin.closeAll (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/Transaction.js:207:25)
    at ReactDefaultBatchingStrategyTransaction.Mixin.perform (/Users/alvin/work/react-render-state-bug/node_modules/react/lib/Transaction.js:148:16)
    ```
