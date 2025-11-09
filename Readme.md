# Wild Horizons API

A dataset of the planet's most interesting places.

## Base URL

`https://wild-horizons-production-6983.up.railway.app/api`

## Endpoints

### Get Data

`GET /api`

Retrieves data from the database.

#### Query Parameters

- `continent` (string): Filter by continent.
- `country` (string): Filter by country.
- `is_open_to_public` (boolean): Filter by whether the location is open to the public.

#### Example Requests

##### Filter by Continent

```bash
curl -X GET "https://wild-horizons-production-6983.up.railway.app/api?continent=Asia"
```

##### Filter by Country

```bash
curl -X GET "https://wild-horizons-production-6983.up.railway.app/api?country=Japan"
```

##### Filter by is_open_to_public

```bash
curl -X GET "https://wild-horizons-production-6983.up.railway.app/api?is_open_to_public=false"
```

##### Filter by Continent and Country

```bash
curl -X GET "https://wild-horizons-production-6983.up.railway.app/api?continent=Europe&country=France"
```

##### Filter by Continent and is_open_to_public

```bash
curl -X GET "https://wild-horizons-production-6983.up.railway.app/api?continent=North America&is_open_to_public=true"
```

##### Filter by Country and is_open_to_public

```bash
curl -X GET "https://wild-horizons-production-6983.up.railway.app/api?country=Canada&is_open_to_public=true"
```

##### Filter by Continent, Country, and is_open_to_public

```bash
curl -X GET "https://wild-horizons-production-6983.up.railway.app/api?continent=South America&country=Brazil&is_open_to_public=true"
```

#### Example Response

```json
[
  {
    "id": 1,
    "name": "Eiffel Tower",
    "continent": "Europe",
    "country": "France",
    "is_open_to_public": true
  }
]
```

## License

ISC