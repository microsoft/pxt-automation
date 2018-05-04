automation.pid1.setGains(1, 0.01, 0.001);
for (let i = 0; i < 10; ++i) {
    const x = automation.pid1.compute(0.1, 5);
}

for (let i = 0; i < 10; ++i)
    automation.movingAverageFilter1.filter(Math.random());