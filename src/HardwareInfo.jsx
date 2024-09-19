import React from "react";

const HardwareInfo = () => {
    const getHardwareInfo = () => {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const cpuInfo = navigator.hardwareConcurrency; // CPU 코어 수 (가장 가까운 하드웨어 정보)

        alert(
            `UserAgent: ${userAgent}\nPlatform: ${platform}\nCPU Cores: ${cpuInfo}`
        );
    };

    return (
        <div>
            <button onClick={getHardwareInfo}>내 PC 정보 가져오기</button>
        </div>
    );
};

export default HardwareInfo;
