# 1. Dostęp
API aplikacji dostępne jest pod adresem http://hub.bazych.pl/
Wszystkie endpointy możemy podejrzeć i przetestować dzięki wtyczce swagger pod adresem: http://hub.bazych.pl/swagger/ 
# 2. Kod
API aplikacji jest napisane w całości w Django (Python). REST API utworzone jest za pomocą Django rest framework. Cały kod znajduje się w cdv_hub/src/hub. Niestety aplikacji nie da się uruchomić na swoim komputerze ze względu na ustawienia których nie ma w repo ze względów bezpieczeństwa (zawierają hasła). 

# 3. Infrastruktura
Samo API w całości stoi na GKE (Google Kubernetes Engine) na platformie Google Cloud. W pliku cdv_hub/hub.yml znajduje się konfiguracja Kubernetesa używana obecnie. Sama infrastruktura klastra jest bardzo prosta, 3 repliki z autoscalingiem i loadbalancerem z przodu. 

# 4. Opis aplikacji
Ta aplikacja miała służyć do rejestru wypożyczania samochodów w firmach, które posiadają własne samochody którymi chcą zarządzać - zainspirowane sytuacją w mojej pracy. API nie jest dość mocno rozbudowane, ale umożliwia podstawowe działanie aplikacji napisanej w React Native dostępnej w repo: https://github.com/Czarczynski/HubApp
Aplikacja pisana z kursem https://www.youtube.com/watch?v=Uyei2iDA4Hs

Projekt utworzony przez Michała Bazycha i Mateusza Czarczyńskiego.
