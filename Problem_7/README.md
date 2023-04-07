# SQL Query

Filter the addresses into latest trade only (block height > 730000)
```
SELECT DISTINCT address FROM trades 
WHERE block_height > 730000
```
Calculate the actual amount in $ using switch case and group by on balances table
```
SELECT b.address
FROM balances b
GROUP BY b.address
HAVING SUM(CASE 
        WHEN b.denom = 'usdc' THEN b.amount * 0.000001
        WHEN b.denom = 'swth' THEN b.amount * 0.00000005
        WHEN b.denom = 'tmz' THEN b.amount * 0.003
    END
) >= 500
```
Join the tables together with inner join and display the resulting addresses
```
SELECT b.address
FROM balances b
INNER JOIN (
    SELECT DISTINCT address FROM trades 
    WHERE block_height > 730000
) t ON b.address = t.address
GROUP BY b.address
HAVING SUM(CASE 
        WHEN b.denom = 'usdc' THEN b.amount * 0.000001
        WHEN b.denom = 'swth' THEN b.amount * 0.00000005
        WHEN b.denom = 'tmz' THEN b.amount * 0.003
    END
) >= 500;
```