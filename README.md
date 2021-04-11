# CricStats Engine

CricStats Engine is a query based search engine that is desinged to carry out cricket based player searches. Users can enter queries (Single keyword, AND, OR) and number of relevent results they need. On search list of players are displayed whose data matches with the user query. Each players Bio and statistics can also be viewed.

## Data 

We have a list of 250 players, over which our search engine searches and retrieves results for user queries. The players data are scraped using selenium from two websites. 
  
  ```bash
  Players bio data, profile summary and profile image are scraped from [cricbuzz](https://www.cricbuzz.com/).
  Players statistics are scraped from [cricmetric[ (http://www.cricmetric.com/index.py)
  ```
The scraped data are stored in local as player_name.csv. The data are indexed using [Whoosh](https://pypi.org/project/Whoosh/) which is a indexing and searching. The data retireved by using ranking and querying technique provided by Whoosh. Which makes searching faster.


## 1. Simple Query:

```bash
Query - Top order Batsman, 
Number of results - 25
```

![results-page](https://user-images.githubusercontent.com/43880647/114308788-9e1ef180-9b02-11eb-9346-e4c708bdeae9.gif)

## Search Results page:

![players-page](https://user-images.githubusercontent.com/43880647/114309581-403fd900-9b05-11eb-93c2-a9354c7c493b.gif)


## 2. AND Query

```bash
Query - Top order AND legbreak AND australia [returns documents that containing all three queries],
Number of results - Nil [returns all relevant results]
```


![complex query](https://user-images.githubusercontent.com/43880647/114309817-35397880-9b06-11eb-93e4-9aa9be350022.gif)

## 3. OR Query

```bash
Query - Top order OR legbreak OR australia [returns idocuments that containing either of three queries satisfies], 
Number of results - Nil (returns all relevant results)
```

![OR query](https://user-images.githubusercontent.com/43880647/114310175-8f870900-9b07-11eb-9f06-8c4949c09763.gif)
