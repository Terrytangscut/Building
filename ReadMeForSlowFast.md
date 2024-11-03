SlowFast的demo运行指令是 
python SlowFast/tools/run_net.py --cfg SlowFast/demo/AVA/SLOWFAST_32x2_R101_50_50.yaml DEMO.INPUT_VIDEO "SlowFast/demo.mp4"

需要对yaml传入的参数是输入视频的路径
输出的是一个Output_results.txt，地址位于 Building/SlowFast/output_results.txt

单行一个种类

在windows上运行模型之前需要设置路径 我的路径是 $env:PYTHONPATH="C:\Users\12787\Desktop\Architect\SlowFast;$env:PYTHONPATH"