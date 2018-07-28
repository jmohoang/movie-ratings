let lineScores = [1.6, 1.7, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 
2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1, 4.2, 4.3, 4.4, 
4.5, 4.6, 4.7, 4.8, 4.9, 5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 
6.6, 6.7, 6.8, 6.9, 7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 
8.7, 8.8, 8.9, 9, 9.1, 9.2, 9.3, 9.5];

let lineUsers = [74351, 4377, 100850, 17094, 51725, 41677, 132456, 107084, 20149, 3310, 205065, 
53071, 48118, 35486, 69224, 11210, 300434, 103887, 176095, 141478, 344615, 240110, 
117996, 158164, 501342, 352029, 782277, 437123, 354074, 926790, 422523, 1086652, 1410094, 
955864, 1652841, 2577853, 1989090, 3129429, 4281416, 4218055, 4426655, 5946116, 6560147, 5385062, 
9233615, 8742591, 9350283, 13019965, 11695791, 13427921, 17041916, 12507795, 12542901, 16985048, 14764510, 
17078686, 17531741, 11700857, 13840599, 17423125, 16274852, 17184134, 13969128, 15761414, 20742381, 10221473, 
11763536, 7852017, 12426688, 7087744, 5459247, 6490286, 4356712,
2637150, 25427, 1155770, 1689764, 10];


let lineData = [
	{"score": 1.6, "voted_users": 74351},
	{"score": 1.7, "voted_users": 4377},
	{"score": 1.9, "voted_users": 100850},
	{"score": 2, "voted_users": 17094},
	{"score": 2.1, "voted_users": 51725},
	{"score": 2.2, "voted_users": 41677},
	{"score": 2.3, "voted_users": 132456},
	{"score": 2.4, "voted_users": 107084},
	{"score": 2.5, "voted_users": 20149},
	{"score": 2.6, "voted_users": 3310},
	{"score": 2.7, "voted_users": 205065},
	{"score": 2.8, "voted_users": 53071},
	{"score": 2.9, "voted_users": 48118},
	{"score": 3, "voted_users": 35486},
	{"score": 3.1, "voted_users": 69224},
	{"score": 3.2, "voted_users": 11210},
	{"score": 3.3, "voted_users": 300434},
	{"score": 3.4, "voted_users": 103887},
	{"score": 3.5, "voted_users": 176095},
	{"score": 3.6, "voted_users": 141478},
	{"score": 3.7, "voted_users": 344615},
	{"score": 3.8, "voted_users": 240110},
	{"score": 3.9, "voted_users": 117996},
	{"score": 4, "voted_users": 158164},
	{"score": 4.1, "voted_users": 501342},
	{"score": 4.2, "voted_users": 352029},
	{"score": 4.3, "voted_users": 782277},
	{"score": 4.4, "voted_users": 437123},
	{"score": 4.5, "voted_users": 354074},
	{"score": 4.6, "voted_users": 926790},
	{"score": 4.7, "voted_users": 422523},
	{"score": 4.8, "voted_users": 1086652},
	{"score": 4.9, "voted_users": 1410094},
	{"score": 5, "voted_users": 955864},
	{"score": 5.1, "voted_users": 1652841},
	{"score": 5.2, "voted_users": 2577853},
	{"score": 5.3, "voted_users": 1989090},
	{"score": 5.4, "voted_users": 3129429},
	{"score": 5.5, "voted_users": 4281416},
	{"score": 5.6, "voted_users": 4218055},
	{"score": 5.7, "voted_users": 4426655},
	{"score": 5.8, "voted_users": 5946116},
	{"score": 5.9, "voted_users": 6560147},
	{"score": 6, "voted_users": 5385062},
	{"score": 6.1, "voted_users": 9233615},
	{"score": 6.2, "voted_users": 8742591},
	{"score": 6.3, "voted_users": 9350283},
	{"score": 6.4, "voted_users": 13019965},
	{"score": 6.5, "voted_users": 11695791},
	{"score": 6.6, "voted_users": 13427921},
	{"score": 6.7, "voted_users": 17041916},
	{"score": 6.8, "voted_users": 12507795},
	{"score": 6.9, "voted_users": 12542901},
	{"score": 7, "voted_users": 16985048},
	{"score": 7.1, "voted_users": 14764510},
	{"score": 7.2, "voted_users": 17078686},
	{"score": 7.3, "voted_users": 17531741},
	{"score": 7.4, "voted_users": 11700857},
	{"score": 7.5, "voted_users": 13840599},
	{"score": 7.6, "voted_users": 17423125},
	{"score": 7.7, "voted_users": 16274852},
	{"score": 7.8, "voted_users": 17184134},
	{"score": 7.9, "voted_users": 13969128},
	{"score": 8, "voted_users": 15761414},
	{"score": 8.1, "voted_users": 20742381},
	{"score": 8.2, "voted_users": 10221473},
	{"score": 8.3, "voted_users": 11763536},
	{"score": 8.4, "voted_users": 7852017},
	{"score": 8.5, "voted_users": 12426688},
	{"score": 8.6, "voted_users": 7087744},
	{"score": 8.7, "voted_users": 5459247},
	{"score": 8.8, "voted_users": 6490286},
	{"score": 8.9, "voted_users": 4356712},
	{"score": 9, "voted_users": 2637150},
	{"score": 9.1, "voted_users": 25427},
	{"score": 9.2, "voted_users": 1155770},
	{"score": 9.3, "voted_users": 1689764},
	{"score": 9.5, "voted_users": 10}
];