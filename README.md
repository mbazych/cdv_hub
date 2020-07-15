# 1. Dostęp
Aplikacja dostępna jest pod adresem https://hub.mczarczynski.pl
Również można uruchomić aplikację na własnym komputerze - wystarczy zainstalować dockera - https://docs.docker.com/get-docker/
sklonować repozytorium oraz uruchomić komendę docker-compose up w folderze głównym aplikacji.
# 2. Kod
Kod JS znajduje się w /src/hub/frontend/src.
Aplikacja napisana jest w React.js (JS) oraz Django (Python). Stworzone jest REST API w Django z którym komunikuje się aplikacja Reactowa poprzez moduł axios (pliki /src/frontend/src/actions)
React używa również reduxa do zarządzania stanami.
# 3. Infrastruktura
Aplikacja działa na dwóch kontenerach Dockera - nginx oraz app:
- nginx - kontener z serwerem webowym nginx który słucha na porcie :80 i przekazuje przez proxy ruch na :8000, czyli port na którym działa aplikacja w Django
- app - aplikacja w Django słuchająca na porcie :8000 z bazą danych sqlite3
Kontenery sa uruchomione na maszynie wirtualnej w Google Cloud, której IP publiczny jest ustawiony jako rekord A domeny hub.mczarczynski.pl

# 4. Opis aplikacji
Ta aplikacja miała służyć do rejestru wypożyczania samochodów w firmach, które posiadają własne samochody którymi chcą zarządzać - zainspirowane sytuacją w mojej pracy. Niestety dużo rzeczy jest nie skończonych, sama rezerwacja ma słaby kalendarz oraz niedokończoną walidację, po kliknięciu 'Rent' nie usuwa się od razu rezerwacja z listy, tylko dopiero po drugim kliknięciu, itd, po prostu jest dużo błędów. 
Aplikacja pisana z kursem https://www.youtube.com/watch?v=Uyei2iDA4Hs

Projekt utworzony przez Michała Bazycha i Mateusza Czarczyńskiego.