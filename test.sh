echo "normal"
time node delay10Seconds.js

echo "concurrent (no injection)"
time chie test-concurrency.yml

echo "concurrent (with injection)"
time chie test-concurrency-with-injection.yml
