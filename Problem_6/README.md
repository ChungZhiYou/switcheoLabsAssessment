# Transaction Broadcaster Service

Requirement: 
<br>Using the post request parameters, the broadcaster service signs the data and the output returns a signed transaction. Next, it broadcasts the signed transaction to an evm-compatible blockchain network.
<br>

Solution:
- Use a while loop to ensure that the loop ends only when the status of transaction is successful (STATUS 200). The loop is only for restarting the broadcasting step (after signing the transaction)
- Instead of await, use wait(300) to check the status for the transaction, the status will be considered failed after 30 seconds and restart automatically (downside: constant 30 seconds process time for every transaction)
- Create a Key-value hashmap data structure that stores the transaction address as key and the result as value

Requirement:
<br> If POST /broadcast_transction returns HTTP 200 OK, it is assumed that the transaction will eventually be broadcasted successfully. If the broadcaster service restarts unexpectedly, it should still fulfil them.
<br>

Solution:
- Use write ahead logging to ensure atomicity, when service restarts unexpectedly, review the log and restart the transactions that are not inside the hashmap. Use checkpointing to prevent long log review time