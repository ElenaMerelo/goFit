# GoFit endpoints 

## /api/exercises/discipline/:discipline

- `discipline`: parámetro que indica la disciplina del ejercicio. Puede tomar los siguientes valores: `yoga` `pilates` `kickboxing` `cardio` `hiit` `functional_training` `bodyweight`.

Si se hace una petición con otro valor que no esté en esa lista, se devolverá un `BAD_REQUEST` (status 400).

~~~
GET /api/exercises/discipline/:discipline
~~~

Devuelve 

~~~json
[{
    "name": "...",
    "discipline": [":discipline", ...],
    "intensity": "...",
    "muscleGroup": "...",
    "description": "...",
}]
~~~

--- 

## /api/exercises/intensity/:intensity

- `intensity`: parámetro que indica la intensidad del ejercicio. Puede tomar los siguientes valores: `low`, `medium`, `high`.

Si se hace una petición con otro valor que no esté en esa lista, se devolverá un `BAD_REQUEST` (status 400).

~~~
GET /api/exercises/intensity/:intensity
~~~

Devuelve 

~~~json
[{
    "name": "...",
    "discipline": [...],
    "intensity": ":intensity",
    "muscleGroup": "...",
    "description": "...",
}]
~~~

---

## /api/exercises/muscle_group/:muscle_group

- `muscle_group`: parámetro que indica el grupo muscular que trabaja el ejercicio. Puede tomar los siguientes valores: `total_body`, `lower_body`, `upper_body`.

Si se hace una petición con otro valor que no esté en esa lista, se devolverá un `BAD_REQUEST` (status 400).

~~~
GET /api/exercises/muscle_group/:muscle_group
~~~

Devuelve 

~~~json
[{
    "name": "...",
    "discipline": [...],
    "intensity": "...",
    "muscleGroup": ":muscle_group",
    "description": "...",
}]
~~~