FROM mongo

COPY seed.json /seed.json

# RUN mongoimport --host mongodb -db reach-engine --collection lecturers --type json --file /seed.json --jsonArray

CMD mongoimport --host mongodb --db test --collection lecturers --type json --file /seed.json --jsonArray