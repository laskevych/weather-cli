CLI for getting weather with [OpenWeather](https://openweathermap.org/)

# What shall we use?
- Receiving arguments
- Making the file system work
- Preparing a project as a CLI
- Working with API
- Styling console output
- Passing Environment Variables
- Using the OS Library

# How to use CLI?
## Save token
```
node weather.js -t [API_TOKEN]
```

## Save city
```
node weather.js -s [CITY]
```

## Example
## Save city
```
// First run
node weather.js -t 5sbssk1128cjb -s Kyiv

// Other run
node weather.js

Weather report!
Погода у місті Kyiv.
☁️ хмарно.
Температура 27.62 °C. Відчувається як 27.6 °C.
Швидкість вітру: 0.45 м/c.

```

