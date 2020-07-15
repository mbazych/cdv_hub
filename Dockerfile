FROM python:3.8.1-alpine3.11 AS build
RUN apk update && apk add gcc libc-dev libffi-dev postgresql-dev
COPY requirements.txt /requirements.txt
RUN pip3.8 install -r /requirements.txt

FROM python:3.8.1-alpine3.11
ENV PYTHONUNBUFFERED=1
COPY --from=build /usr/ /usr/
RUN mkdir -p /var/www/cdv-hub/
WORKDIR /var/www/cdv-hub/
COPY src/ .
CMD ./run.sh
