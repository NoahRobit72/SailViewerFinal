// Format
// Latidude, Longitude, Altidude, Speed, Course Heading, hacc?
let data = [
    [42.35217,-71.10993,-2.5,0.552,26.839,4.693],
    [42.35217,-71.10993,-1.905,0.57,33.505,4.695],
    [42.35218,-71.10992,-1.345,0.698,38.357,4.688],
    [42.35218,-71.10992,-0.582,0.575,39.908,4.688],
    [42.35218,-71.10992,-0.316,0.592,38.92,4.684],
    [42.35218,-71.10992,-0.245,0.415,37.617,4.686],
    [42.35219,-71.10991,-1.232,0.665,37.369,4.687],
    [42.3522,-71.10991,-0.677,0.655,37.451,4.687],
    [42.35221,-71.10991,-0.829,0.696,37.007,4.689],
    [42.35221,-71.1099,-0.483,0.71,32.835,4.687],
    [42.35222,-71.1099,-0.355,0.779,29.689,4.687],
    [42.35223,-71.1099,0.128,0.782,26.135,4.683],
    [42.35224,-71.10989,0.046,0.73,28.829,4.681],
    [42.35224,-71.10989,0.387,0,35.593,4.68],
    [42.35224,-71.10989,0.387,0,35.593,4.676],
    [42.35225,-71.10987,0.887,0,41.391,4.674],
    [42.35226,-71.10986,1.494,0.755,51.028,4.673],
    [42.35226,-71.10984,0.791,0.928,54.123,4.672],
    [42.35226,-71.10984,0.917,0.702,58.105,4.675],
    [42.35227,-71.10983,1.067,0.585,52.33,4.676],
    [42.35228,-71.10982,0.766,1.018,49.512,4.679],
    [42.35229,-71.10981,0.301,0.967,49.002,4.68],
    [42.35229,-71.10981,-0.605,0.853,45.249,4.685],
    [42.3523,-71.10979,-1.04,1.196,53.896,4.688],
    [42.35231,-71.10978,-1.821,0.893,48.065,4.692],
    [42.35231,-71.10978,-1.744,0,48.508,4.694],
    [42.35232,-71.10977,-2.048,0.948,44.144,4.696],
    [42.35232,-71.10977,-2.033,0,47.341,4.694],
    [42.35232,-71.10977,-2.033,0,47.341,4.694],
    [42.35232,-71.10977,-2.033,0,47.341,4.696],
    [42.35235,-71.10973,-2.091,0.939,50.028,4.698],
    [42.35234,-71.10973,-2.124,0,50.602,4.698],
    [42.35234,-71.10973,-2.124,0,50.602,4.699],
    [42.35234,-71.10973,-2.124,0,50.602,4.699],
    [42.35237,-71.10969,-1.553,0.822,40.482,4.701],
    [42.35238,-71.10967,-1.941,1.072,46.578,4.701],
    [42.35238,-71.10967,-1.87,0,53.419,4.703],
    [42.35238,-71.10967,-1.87,0,53.419,4.705],
    [42.35238,-71.10967,-1.87,0,53.419,4.708],
    [42.35241,-71.10963,-2.167,1.202,53.637,4.71],
    [42.35241,-71.10963,-2.076,0,48.589,4.713],
    [42.35242,-71.10961,-3.007,1.167,57.198,4.717],
    [42.35243,-71.1096,-2.776,1.225,51.876,4.716],
    [42.35243,-71.1096,-2.424,0,50.7,4.715],
    [42.35244,-71.10957,-2.619,1.29,57.864,4.713],
    [42.35245,-71.10955,-2.803,1.252,60.04,4.713],
    [42.35245,-71.10955,-3.188,0,59.207,4.712],
    [42.35245,-71.10953,-3.394,0,60.615,4.712],
    [42.35246,-71.10952,-3.494,0,63.776,4.712],
    [42.35246,-71.1095,-3.462,0,66.513,4.712],
    [42.35247,-71.10948,-3.477,1.162,61.29,4.712],
    [42.35248,-71.10946,-3.379,1.338,62.506,4.712],
    [42.35248,-71.10944,-3.501,1.467,64.44,4.712],
    [42.35248,-71.10944,-3.516,0,64.705,4.711],
    [42.35249,-71.10941,-3.235,1.468,60.616,4.709],
    [42.35249,-71.1094,-3.198,0,63.106,4.708],
    [42.35251,-71.10937,-3.145,1.481,63.091,4.708],
    [42.3525,-71.10938,-3.144,0,63.246,4.708],
    [42.3525,-71.10938,-3.144,0,63.246,4.708],
    [42.3525,-71.10938,-3.144,0,63.246,4.706],
    [42.35252,-71.1093,-3.51,1.424,59.929,4.704],
    [42.35253,-71.10928,-3.591,1.635,63.537,4.703],
    [42.35254,-71.10926,-3.721,1.776,66.657,4.704],
    [42.35253,-71.10926,-3.73,0,67.554,4.704],
    [42.35254,-71.10924,-3.315,0,64.423,4.704],
    [42.35256,-71.1092,-3.025,1.611,63.817,4.704],
    [42.35256,-71.10919,-2.857,0,61.968,4.702],
    [42.35256,-71.10919,-2.857,0,61.968,4.7],
    [42.35256,-71.10919,-2.857,0,61.968,4.698],
    [42.35256,-71.10919,-2.857,0,61.968,4.696],
    [42.35256,-71.10919,-2.857,0,61.968,4.694],
    [42.35256,-71.10919,-2.857,0,61.968,4.695],
    [42.35256,-71.10919,-2.857,0,61.968,4.694],
    [42.35256,-71.10919,-2.857,0,61.968,4.694],
    [42.35256,-71.10919,-2.857,0,61.968,4.696],
    [42.35256,-71.10919,-2.857,0,61.968,4.696],
    [42.35256,-71.10919,-2.857,0,61.968,4.698],
    [42.35256,-71.10919,-2.857,0,61.968,4.697],
    [42.35256,-71.10919,-2.857,0,61.968,4.698],
    [42.35256,-71.10919,-2.857,0,61.968,4.694],
    [42.35256,-71.10919,-2.857,0,61.968,4.695],
    [42.35264,-71.10892,-2.664,1.207,61.203,4.695],
    [42.35265,-71.1089,-2.054,1.341,65.348,4.695],
    [42.35265,-71.10889,-2.645,1.27,65.458,4.697],
    [42.35265,-71.10889,-2.679,0,65.986,4.699],
    [42.35267,-71.10886,-2.968,1.226,54.2,4.699],
    [42.35269,-71.10885,-3.018,1.631,43.357,4.697],
    [42.35268,-71.10884,-3.012,0,49.942,4.696],
    [42.35269,-71.10882,-2.939,1.072,52.894,4.697],
    [42.3527,-71.10881,-2.965,0.886,62.614,4.695],
    [42.35271,-71.1088,-3.068,1.13,56.757,4.691],
    [42.35271,-71.10879,-2.99,1.095,58.669,4.692],
    [42.35272,-71.10878,-3.541,1.162,57.812,4.69],
    [42.35272,-71.10877,-3.236,1.022,57.863,4.689],
    [42.35272,-71.10876,-3.339,0,58.344,4.689],
    [42.35273,-71.10874,-3.138,0.91,60.815,4.69],
    [42.35274,-71.10873,-4.3,1.189,67.172,4.689],
    [42.35274,-71.10872,-3.764,0.949,57.244,4.691],
    [42.35274,-71.10871,-3.912,0.94,64.987,4.692],
    [42.35275,-71.10871,-3.62,0.542,61.203,4.695],
    [42.35275,-71.1087,-3.695,0.592,63.557,4.698],
    [42.35275,-71.10868,-3.626,0.918,74.469,4.71],
    [42.35274,-71.10867,-3.515,0.847,96.791,4.705],
    [42.35273,-71.10865,-3.046,1.115,119.876,4.699],
    [42.35272,-71.10864,-3.008,1.183,128.527,4.683],
    [42.3527,-71.10863,-3.207,1.371,143.278,4.679],
    [42.35269,-71.10863,-3.076,1.426,154.495,4.677],
    [42.35268,-71.10863,-2.534,1.393,164.948,4.671],
    [42.35267,-71.10863,-2.569,1.216,169.611,4.668],
    [42.35266,-71.10862,-2.571,1.202,172.512,4.676],
    [42.35264,-71.10862,-2.384,1.265,170.454,4.692],
    [42.35263,-71.10862,-2.948,1.318,170.467,4.706],
    [42.35263,-71.10862,-2.201,0.864,187.755,4.701],
    [42.35261,-71.10861,-2.385,1.264,172.604,4.681],
    [42.3526,-71.1086,-2.876,1.021,159.988,4.675],
    [42.35259,-71.1086,-2.405,0,177.354,4.671],
    [42.35257,-71.10859,-2.335,1.49,167.538,4.672],
    [42.35255,-71.10859,-2.208,1.66,164.328,4.671],
    [42.35255,-71.10858,-2.044,0,162.952,4.671],
    [42.35252,-71.10857,-1.474,1.6,163.198,4.672],
    [42.35251,-71.10857,-1.74,1.635,166.682,4.672],
    [42.35249,-71.10856,-1.505,1.573,168.367,4.675],
    [42.35248,-71.10856,-1.397,1.627,169.451,4.679],
    [42.35246,-71.10855,-1.272,1.695,167.415,4.682],
    [42.35245,-71.10854,-0.745,1.541,166.807,4.684],
    [42.35244,-71.10854,-0.832,1.479,165.459,4.687],
    [42.35242,-71.10854,-1.333,1.768,165.934,4.692],
    [42.35241,-71.10854,-1.655,1.905,175.707,4.694],
    [42.35239,-71.10854,-1.289,1.651,179.252,4.695],
    [42.35237,-71.10854,-0.71,1.896,180.222,4.697],
    [42.35236,-71.10854,-1.096,1.979,181.355,4.699],
    [42.35234,-71.10854,-1.044,1.935,182.878,4.702],
    [42.35232,-71.10854,-1.482,1.99,178.95,4.707],
    [42.35231,-71.10855,-1.288,1.863,184.005,4.711],
    [42.35229,-71.10856,-1.807,1.686,192.828,4.713],
    [42.35228,-71.10857,-1.556,1.663,207.152,4.71],
    [42.35226,-71.10858,-0.734,1.956,202.556,4.703],
    [42.35226,-71.1086,-0.812,1.608,232.031,4.708],
    [42.35225,-71.10862,-1.241,1.54,246.91,4.698],
    [42.35226,-71.10863,-1.303,1.069,261.85,4.694],
    [42.35226,-71.10864,-1.502,0.906,284.124,4.69],
    [42.35227,-71.10864,-1.998,0.908,312.118,4.685],
    [42.35228,-71.10866,-2.735,1.345,319.858,4.684],
    [42.35229,-71.10867,-2.972,1.415,320.374,4.68],
    [42.3523,-71.10868,-3.051,1.367,321.489,4.677],
    [42.3523,-71.10869,-3.079,1.129,319.015,4.676],
    [42.35231,-71.1087,-3.577,1.459,322.721,4.673],
    [42.35233,-71.10871,-3.655,1.496,326.58,4.671],
    [42.35233,-71.10872,-4.105,1.068,316.661,4.67],
    [42.35234,-71.10873,-3.88,0.968,325.685,4.668],
    [42.35234,-71.10873,-3.787,1.089,325.626,4.667],
    [42.35235,-71.10874,-3.696,1.065,322.019,4.664],
    [42.35236,-71.10875,-3.54,0.97,321.225,4.665],
    [42.35237,-71.10876,-3.402,1.217,317.062,4.657],
    [42.35238,-71.10877,-3.496,1.448,317.662,4.658],
    [42.35239,-71.10878,-3.398,1.67,318.936,4.66],
    [42.3524,-71.1088,-2.952,1.485,315.975,4.66],
    [42.35241,-71.10881,-2.784,1.638,325.076,4.66],
    [42.35243,-71.10882,-2.766,1.725,325.358,4.661],
    [42.35244,-71.10883,-2.792,1.741,327.335,4.661],
    [42.35245,-71.10884,-2.763,1.747,331.284,4.662],
    [42.35246,-71.10885,-2.526,1.781,330.037,4.661],
    [42.35248,-71.10886,-2.573,1.878,327.657,4.66],
    [42.3525,-71.10888,-2.531,1.967,326.38,4.66],
    [42.35251,-71.10889,-2.641,2.006,323.107,4.66],
    [42.35252,-71.10891,-2.234,2.031,323.419,4.66],
    [42.35254,-71.10892,-1.78,1.905,321.538,4.661],
    [42.35255,-71.10894,-1.765,2.087,321.463,4.664],
    [42.35257,-71.10896,-1.919,2.382,316.224,4.666],
    [42.35258,-71.10898,-1.407,2.22,311.318,4.667],
    [42.35259,-71.10901,-1.49,2.018,300.109,4.668],
    [42.3526,-71.10903,-1.758,1.969,299.396,4.666],
    [42.3526,-71.10905,-2.05,1.944,297.999,4.664],
    [42.35261,-71.10907,-1.729,1.849,296.708,4.663],
    [42.35262,-71.1091,-1.883,2.142,297.718,4.661],
    [42.35263,-71.10912,-2.239,2.091,293.091,4.658],
    [42.35263,-71.10914,-1.849,1.575,281.792,4.659],
    [42.35262,-71.10913,-2.636,0.665,217.903,4.66],
    [42.35261,-71.10915,-2.064,1.324,216.235,4.663],
    [42.3526,-71.10917,-1.914,1.554,214.55,4.658],
    [42.35258,-71.10918,-2.184,1.766,213.161,4.662],
    [42.35257,-71.10919,-2.126,2.019,208.883,4.664],
    [42.35255,-71.10921,-2.012,1.985,213.622,4.665],
    [42.35254,-71.10922,-1.845,1.874,217.247,4.666],
    [42.35253,-71.10924,-1.74,1.938,219.553,4.671],
    [42.35252,-71.10926,-1.92,1.912,218.178,4.671],
    [42.35251,-71.10927,-1.82,1.73,218.658,4.676],
    [42.3525,-71.10928,-1.651,1.682,221.364,4.677],
    [42.35249,-71.10929,-1.495,1.492,219.846,4.679],
    [42.35249,-71.1093,-1.804,1.331,216.471,4.681],
    [42.35247,-71.1093,-1.604,1.391,200.941,4.679],
    [42.35246,-71.10931,-1.45,1.472,192.499,4.682],
    [42.35245,-71.10931,-1.09,1.432,190.564,4.686],
    [42.35244,-71.10932,-1.105,1.063,213.088,4.688],
    [42.35245,-71.10934,-0.973,0.965,249.102,4.688],
    [42.35245,-71.10935,-1.21,0.906,279.517,4.686],
    [42.35245,-71.10937,-2.134,1.293,272.352,4.684],
    [42.35246,-71.10939,-2.235,1.351,289.076,4.683],
    [42.35246,-71.1094,-2.026,0,288.927,4.681],
    [42.35246,-71.10942,-2.254,1.272,288.356,4.679],
    [42.35247,-71.10943,-2.143,1.195,290.915,4.678],
    [42.35247,-71.10944,-2.254,0.968,293.88,4.677],
    [42.35247,-71.10945,-2.173,0.774,295.599,4.677],
    [42.35247,-71.10946,-2.676,0.792,277.267,4.677],
    [42.35246,-71.10947,-2.919,0.714,243.807,4.678],
    [42.35245,-71.10948,-3.25,1.048,225.286,4.683],
    [42.35244,-71.1095,-2.845,1.371,227.132,4.685],
    [42.35243,-71.1095,-2.914,1.305,217.769,4.681],
    [42.35242,-71.10951,-2.892,1.279,214.804,4.684],
    [42.35242,-71.10952,-3.007,1.251,213.334,4.689],
    [42.3524,-71.10952,-2.778,1.298,206.693,4.69],
    [42.35239,-71.10953,-3.038,1.371,208.661,4.688],
    [42.35239,-71.10954,-2.815,1.365,208.51,4.69],
    [42.35237,-71.10955,-2.706,1.476,210.383,4.69],
    [42.35237,-71.10955,-2.651,0,209.294,4.69],
    [42.35235,-71.10957,-2.744,1.845,211.862,4.69],
    [42.35234,-71.10959,-2.973,1.627,217.597,4.69],
    [42.35233,-71.1096,-2.981,1.547,217.993,4.69],
    [42.35232,-71.10961,-2.847,1.442,227.372,4.689],
    [42.35232,-71.10963,-2.5,1.302,256.172,4.686],
    [42.35233,-71.10963,-2.175,0.925,283.771,4.684],
    [42.35234,-71.10964,-1.95,1.015,317.333,4.682],
    [42.35234,-71.10965,-2.537,1.09,323.311,4.683],
    [42.35236,-71.10966,-2.933,1.326,326.783,4.683],
    [42.35237,-71.10967,-3.039,1.35,326.819,4.682],
    [42.35238,-71.10969,-3.283,1.539,320.176,4.682],
    [42.35239,-71.1097,-3.216,1.456,316.169,4.68],
    [42.3524,-71.10971,-3.406,1.434,318.907,4.678],
    [42.3524,-71.10972,-3.445,1.144,316.304,4.677],
    [42.35241,-71.10973,-3.408,1.05,308.267,4.674],
    [42.35241,-71.10975,-3.535,1.059,296.786,4.667],
    [42.35241,-71.10976,-3.862,0.714,266.726,4.667],
    [42.3524,-71.10976,-3.441,0.619,241.947,4.668],
    [42.35239,-71.10978,-3.017,1.111,233.329,4.673],
    [42.35239,-71.10979,-2.77,1.322,228.806,4.675],
    [42.35237,-71.10979,-2.949,1.504,206.288,4.676],
    [42.35236,-71.1098,-3.159,1.488,199.626,4.678],
    [42.35235,-71.1098,-2.602,1.435,197.852,4.682],
    [42.35234,-71.10981,-2.542,1.309,196.283,4.685],
    [42.35234,-71.10981,-2.644,0,196.719,4.686],
    [42.35232,-71.10981,-2.197,1.221,193.963,4.685],
    [42.35231,-71.10981,-2.058,0,197.831,4.684],
    [42.35231,-71.10981,-2.058,0,197.831,4.684],
    [42.35229,-71.10982,-1.865,0,196.516,4.685],
    [42.35227,-71.10983,-1.823,1.24,202.738,4.685],
    [42.35226,-71.10983,-1.901,1.255,198.816,4.687],
    [42.35227,-71.10983,-1.903,0,198.788,4.687],
    [42.35224,-71.10984,-1.574,1.223,199.713,4.687],
    [42.35223,-71.10985,-1.48,1.218,199.231,4.688],
    [42.35222,-71.10985,-1.662,1.204,204.772,4.691],
    [42.35222,-71.10985,-1.458,0,196.407,4.694],
    [42.35221,-71.10985,-1.366,0,199.068,4.692],
    [42.35219,-71.10986,-0.99,1.246,202.581,4.691],
    [42.3522,-71.10986,-0.957,0,208.977,4.688],
    [42.35218,-71.10988,-0.859,1.157,216.411,4.689],
    [42.35217,-71.10988,-0.595,1.166,215.304,4.69],
    [42.35216,-71.10989,-0.758,1.176,222.935,4.682],
    [42.35215,-71.10991,-1.14,1.067,243.237,4.686],
    [42.35215,-71.10992,-1.312,0.889,268.052,4.681],
    [42.35215,-71.10992,-0.079,0.368,309.573,4.683],
    [42.35215,-71.10992,-0.206,0.237,326.241,4.684],
    [42.35216,-71.10993,-0.443,0.95,334.676,4.685],
    [42.35216,-71.10993,-0.841,0.966,345.194,4.683],
    [42.35217,-71.10993,-0.488,1.022,348.922,4.682],
    [42.35217,-71.10993,-0.162,0.65,3.45,4.682],
    [42.35219,-71.10994,-0.324,1.387,5.816,4.682],
    [42.35221,-71.10993,-0.178,1.512,16.947,4.683],
    [42.35222,-71.10991,0.063,1.698,37.071,4.678],
    [42.35223,-71.1099,-0.079,1.698,46.659,4.677],
    [42.35224,-71.10988,0.615,1.524,51.38,4.675],
    [42.35225,-71.10986,0.569,1.893,52.775,4.672],
    [42.35227,-71.10985,0.825,1.812,51.089,4.67],
    [42.35228,-71.10983,0.495,1.589,52.411,4.671],
    [42.35229,-71.10982,0.831,1.649,54.666,4.67],
    [42.35229,-71.1098,0.197,1.586,55.196,4.67],
    [42.3523,-71.10979,-0.015,0,61.503,4.669],
    [42.3523,-71.10979,-0.015,0,61.503,4.669],
    [42.35232,-71.10975,-0.263,1.688,57.359,4.67],
    [42.35233,-71.10974,-0.739,1.663,55.149,4.673],
    [42.35233,-71.10974,-0.746,0,54.897,4.673],
    [42.35236,-71.10971,-0.801,1.642,46.502,4.674],
    [42.35238,-71.1097,-0.521,1.839,47.77,4.675],
    [42.35239,-71.10967,-0.833,2.012,55.985,4.676],
    [42.3524,-71.10964,-0.773,2.118,60.734,4.677],
    [42.35241,-71.10962,-0.701,2.086,59.048,4.67],
    [42.35242,-71.1096,-1.283,2.275,62.991,4.669],
    [42.35243,-71.10957,-1.507,2.247,64.072,4.669],
    [42.35243,-71.10954,-1.508,2.244,68.394,4.672],
    [42.35244,-71.10952,-1.759,2.158,68.394,4.673],
    [42.35244,-71.10949,-2.519,2.146,72.107,4.673],
    [42.35245,-71.10947,-2.579,2.028,72.759,4.674],
    [42.35245,-71.10944,-2.992,2.171,74.026,4.676],
    [42.35246,-71.10941,-3.247,2.117,77.032,4.677],
    [42.35246,-71.10939,-3.433,2.108,79.772,4.679],
    [42.35246,-71.10936,-3.775,2.028,77.211,4.681],
    [42.35247,-71.10934,-3.95,1.926,78.554,4.683],
    [42.35247,-71.10932,-3.942,1.785,77.816,4.683],
    [42.35247,-71.1093,-3.967,1.81,80.339,4.683],
    [42.35248,-71.10928,-3.924,1.737,81.632,4.683],
    [42.35248,-71.10925,-4.273,1.812,81.99,4.685],
    [42.35248,-71.10923,-4.393,1.853,81.69,4.687],
    [42.35248,-71.10921,-4.453,1.994,80.339,4.686],
    [42.35249,-71.10918,-4.455,2.002,79.732,4.688],
    [42.35249,-71.10916,-4.58,2.03,80.738,4.689],
    [42.35249,-71.10913,-4.794,2.077,81.132,4.689],
    [42.3525,-71.10911,-4.806,2.05,77.175,4.689],
    [42.3525,-71.10908,-4.769,2.097,72.638,4.688],
    [42.35251,-71.10906,-4.786,2.058,69.301,4.689],
    [42.35252,-71.10903,-4.958,2.051,69.816,4.689],
    [42.35252,-71.10901,-5.097,2.071,71.032,4.685],
    [42.35253,-71.10898,-5.069,2.023,70.334,4.684],
    [42.35254,-71.10896,-5.035,2.033,69.27,4.684],
    [42.35254,-71.10893,-4.852,2.076,68.896,4.683],
    [42.35255,-71.10891,-4.827,2.124,69.4,4.681],
    [42.35256,-71.10888,-4.777,2.153,68.357,4.682],
    [42.35256,-71.10886,-4.906,2.233,70.111,4.684],
    [42.35257,-71.10883,-4.976,2.166,70.709,4.685],
    [42.35258,-71.1088,-4.992,2.209,72.139,4.684],
    [42.35258,-71.10878,-4.867,2.083,70.17,4.683],
    [42.35259,-71.10875,-4.919,2.101,72.357,4.685],
    [42.35259,-71.10873,-4.995,1.998,71.618,4.688],
    [42.3526,-71.10871,-4.93,1.861,70.665,4.689],
    [42.35261,-71.10869,-5.04,1.913,70.074,4.688],
    [42.35261,-71.10867,-4.742,1.856,68.989,4.687],
    [42.35262,-71.10865,-4.885,1.62,65.079,4.688],
    [42.35263,-71.10863,-4.703,1.915,60.904,4.684],
    [42.35263,-71.10861,-4.587,1.907,61.171,4.683],
    [42.35264,-71.10859,-4.742,1.871,59.317,4.681],
    [42.35265,-71.10857,-4.546,1.918,58.852,4.681],
    [42.35266,-71.10854,-4.3,2.218,57.816,4.68],
    [42.35267,-71.10852,-4.478,2.178,61.272,4.681],
    [42.35268,-71.1085,-4.526,2.079,63.066,4.684],
    [42.35269,-71.10847,-4.397,2.209,66.364,4.687],
    [42.35268,-71.10848,-4.382,0,66.911,4.687],
    [42.35268,-71.10848,-4.382,0,66.911,4.687],
    [42.35268,-71.10848,-4.382,0,66.911,4.683],
    [42.35268,-71.10848,-4.382,0,66.911,4.684],
    [42.35273,-71.10835,-5.392,2.176,69.441,4.686],
    [42.35273,-71.10832,-5.401,2.168,71.113,4.686],
    [42.35274,-71.1083,-5.422,2.015,65.048,4.685],
    [42.35274,-71.10831,-5.412,0,64.634,4.686],
    [42.35276,-71.10826,-5.07,2.099,61.131,4.683],
    [42.35277,-71.10823,-5.354,2.062,59.486,4.682],
    [42.35278,-71.10821,-5.488,2.127,61.791,4.68],
    [42.35278,-71.10819,-5.104,1.9,69.311,4.679],
    [42.3528,-71.10817,-4.737,2.273,59.358,4.678],
    [42.35281,-71.10814,-4.761,2.277,59.132,4.68],
    [42.35281,-71.10812,-4.8,2.221,62.465,4.68],
    [42.35282,-71.1081,-4.805,2.056,59.777,4.678],
    [42.35283,-71.10807,-4.689,2.405,61.526,4.677],
    [42.35284,-71.10804,-4.828,2.256,72.009,4.676],
    [42.35284,-71.10802,-4.605,1.954,81.617,4.68],
    [42.35284,-71.108,-4.845,1.621,84,4.691],
    [42.35283,-71.10797,-4.76,2.123,94.96,4.69],
    [42.35282,-71.10794,-4.513,2.5,104.019,4.728],
    [42.3528,-71.10791,-4.118,2.538,120.539,4.729],
    [42.35278,-71.10789,-4.218,2.681,131.478,4.719],
    [42.35277,-71.10787,-4.05,2.297,125.961,4.699],
    [42.35276,-71.10784,-4.597,2.764,123.253,4.697],
    [42.35275,-71.10781,-4.56,2.62,122.528,4.7],
    [42.35274,-71.10779,-4.298,2.381,118.753,4.7],
    [42.35273,-71.10776,-4.27,2.385,110.69,4.694],
    [42.35273,-71.10773,-4.553,2.213,111.012,4.694],
    [42.35272,-71.10771,-4.629,2.064,108.976,4.695],
    [42.35272,-71.10769,-4.918,1.97,105.248,4.697],
    [42.35271,-71.10766,-4.731,2.157,113.369,4.702],
    [42.3527,-71.10764,-4.96,1.907,114.38,4.704],
    [42.35269,-71.10762,-4.925,1.827,113.44,4.705],
    [42.35269,-71.10761,-4.995,1.718,117.423,4.704],
    [42.35268,-71.10759,-5.506,1.721,121.241,4.704],
    [42.35267,-71.10758,-5.539,1.681,119.87,4.703],
    [42.35266,-71.10757,-5.331,1.408,127.282,4.702],
    [42.35265,-71.10755,-5.216,1.582,134.59,4.701],
    [42.35265,-71.10754,-5.467,1.242,128.207,4.702],
    [42.35263,-71.10752,-5.43,1.853,127.459,4.701],
    [42.35262,-71.1075,-5.211,1.918,130.449,4.701],
    [42.35261,-71.10748,-4.938,2.006,132.665,4.702],
    [42.3526,-71.10746,-4.504,2.058,130.054,4.703],
    [42.35259,-71.10744,-4.388,2.181,128.026,4.699],
    [42.35258,-71.10742,-3.868,2.064,127.498,4.697],
    [42.35256,-71.1074,-3.862,2.051,131.157,4.696],
    [42.35255,-71.10738,-3.745,2.095,133.116,4.696],
    [42.35253,-71.10736,-3.513,2.17,132.83,4.698],
    [42.35252,-71.10734,-3.421,2.278,133.622,4.698],
    [42.3525,-71.10732,-3.654,2.405,135.064,4.696],
    [42.35249,-71.1073,-3.819,2.316,134.023,4.7],
    [42.35247,-71.10728,-4.113,2.667,135.741,4.706],
    [42.35245,-71.10726,-3.943,2.753,135.118,4.778],
    [42.35244,-71.10723,-3.959,2.418,129.596,4.955],
    [42.35243,-71.10721,-3.721,2.258,125.735,5.259],
    [42.35247,-71.1072,-1.846,1.496,83.567,4.791],
    [42.35248,-71.10717,-2.608,1.869,58.771,4.713],
    [42.35251,-71.10717,-2.723,2.188,29.987,4.696],
    [42.35253,-71.10716,-2.854,2.588,15.929,4.687],
    [42.35254,-71.10717,-3.964,2.524,7.894,4.682],
    [42.35256,-71.10716,-3.166,2.635,10.753,4.679],
    [42.35259,-71.10716,-3.27,2.789,9.222,4.68],
    [42.35262,-71.10715,-4.083,2.959,5.27,4.701],
    [42.35265,-71.10716,-3.73,3.167,357.605,4.684],
    [42.35267,-71.10718,-3.814,3.048,343.066,4.685],
    [42.35268,-71.10719,-3.807,2.732,334.18,4.689],
    [42.3527,-71.10721,-4.048,2.752,324.361,4.694],
    [42.35272,-71.10723,-3.918,2.589,320.338,4.698],
    [42.35273,-71.10725,-3.917,2.376,323.349,4.696],
    [42.35275,-71.10727,-3.83,2.661,322.349,4.695],
    [42.35276,-71.10729,-3.792,2.642,314.686,4.696],
    [42.35278,-71.10732,-3.546,2.643,307.807,4.694],
    [42.35279,-71.10734,-3.844,2.579,308.554,4.693],
    [42.35281,-71.10737,-3.75,2.698,312.37,4.692],
    [42.35283,-71.10739,-3.932,2.552,311.177,4.685],
    [42.35284,-71.10742,-3.687,2.751,307.593,4.691],
    [42.35286,-71.10745,-3.501,2.793,304.304,4.686],
    [42.35287,-71.10747,-3.792,2.403,305.309,4.686],
    [42.35288,-71.10749,-3.918,2.444,304.769,4.682],
    [42.3529,-71.10751,-3.083,2.308,308.898,4.682],
    [42.35291,-71.10753,-3.358,2.36,309.575,4.685],
    [42.35293,-71.10755,-3.885,2.253,309.615,4.688],
    [42.35294,-71.10757,-3.964,2.333,310.876,4.687],
    [42.35295,-71.1076,-3.482,2.345,308.132,4.685],
    [42.35297,-71.10762,-3.558,2.18,305.828,4.685],
    [42.35297,-71.10763,-2.517,1.631,295.911,4.684],
    [42.35297,-71.10764,-2.28,0.989,280.838,4.683],
    [42.35296,-71.10764,-1.057,0.879,246.334,4.682],
    [42.35294,-71.10765,-1.801,1.285,218.125,4.684],
    [42.35293,-71.10766,-1.79,1.751,214.723,4.685],
    [42.35291,-71.10767,-1.88,2.077,208.944,4.688],
    [42.35289,-71.10768,-1.038,2.148,204.599,4.688],
    [42.35288,-71.10768,-0.299,1.891,203.206,4.689],
    [42.35286,-71.10771,-1.023,2.419,215.089,4.69],
    [42.35284,-71.10774,-1.142,2.754,219.85,4.69],
    [42.35282,-71.10776,-1.788,2.684,221.202,4.688],
    [42.3528,-71.10778,-1.7,2.346,221.043,4.685],
    [42.35278,-71.10779,-2.006,2.163,219.493,4.685],
    [42.35276,-71.10781,-2.251,2.323,217.295,4.684],
    [42.35275,-71.10783,-2.08,2.156,219.769,4.684],
    [42.35273,-71.10785,-2.525,2.208,223.15,4.682],
    [42.35272,-71.10786,-2.736,2.206,221.914,4.68],
    [42.3527,-71.10788,-2.717,2.238,220.944,4.673],
    [42.35268,-71.1079,-2.781,2.114,225.928,4.673],
    [42.35267,-71.10792,-2.869,2.339,225.949,4.672],
    [42.35265,-71.10795,-2.969,2.54,226.601,4.672],
    [42.35263,-71.10797,-3.429,2.338,225.596,4.672],
    [42.35262,-71.10799,-3.825,2.256,229.485,4.675],
    [42.35261,-71.10802,-3.985,2.364,230.844,4.676],
    [42.35259,-71.10804,-3.385,2.413,224.449,4.678],
    [42.35258,-71.10806,-4.128,2.333,230.213,4.679],
    [42.35256,-71.10808,-3.951,2.322,229.338,4.683],
    [42.35255,-71.1081,-4.525,2.162,231.658,4.683],
    [42.35253,-71.10812,-4.267,2.141,224.213,4.683],
    [42.35252,-71.10814,-4.831,2.259,226.382,4.683],
    [42.35251,-71.10816,-4.592,2.29,226.538,4.683],
    [42.35249,-71.10818,-5.213,2.345,226.368,4.684],
    [42.35248,-71.1082,-4.884,2.025,225.019,4.685],
    [42.35246,-71.10821,-4.164,2.269,216.474,4.685],
    [42.35244,-71.10823,-4.377,2.247,216.47,4.685],
    [42.35243,-71.10824,-4.589,2.09,218.376,4.685],
    [42.35241,-71.10826,-4.776,2.094,216.827,4.686],
    [42.35239,-71.10827,-4.432,2.211,211.229,4.685],
    [42.35237,-71.10828,-4.064,2.16,207.557,4.685],
    [42.35236,-71.1083,-4.309,2.192,219.964,4.685],
    [42.35235,-71.10832,-4.581,2.212,224.749,4.686],
    [42.35234,-71.10833,-4.765,0,224.734,4.685],
    [42.35232,-71.10836,-5.116,2.156,227.101,4.686],
    [42.35231,-71.10838,-4.921,2.015,227.767,4.682],
    [42.3523,-71.1084,-5.256,1.985,228.397,4.683],
    [42.35228,-71.10842,-5.328,2.115,226.911,4.682],
    [42.35227,-71.10844,-5.271,2.134,227.207,4.684],
    [42.35226,-71.10847,-4.816,2.24,241.546,4.686],
    [42.35225,-71.10848,-4.967,1.902,234.354,4.686],
    [42.35224,-71.10851,-4.643,2.313,247.401,4.685],
    [42.35225,-71.10853,-4.582,2,268.987,4.686],
    [42.35225,-71.10853,-3.793,1.258,294.239,4.687],
    [42.35226,-71.10854,-3.828,1.08,333.7,4.688],
    [42.35228,-71.10854,-5.217,1.503,343.193,4.688],
    [42.35229,-71.10854,-4.909,1.437,350.503,4.687],
    [42.35231,-71.10854,-5.153,1.799,355.25,4.687],
    [42.35233,-71.10855,-5.075,1.777,354.233,4.687],
    [42.35235,-71.10855,-4.876,1.887,350.794,4.687],
    [42.35236,-71.10855,-4.935,1.545,353.718,4.69],
    [42.35237,-71.10855,-5.598,1.325,10.364,4.689],
    [42.35239,-71.10856,-5.573,1.604,347.499,4.688],
    [42.3524,-71.10857,-5.855,1.524,346.148,4.685],
    [42.35241,-71.10858,-5.647,1.299,332.656,4.683],
    [42.35241,-71.10858,-5.191,1.004,336.921,4.681],
    [42.35244,-71.10859,-5.353,1.628,343.914,4.679],
    [42.35245,-71.1086,-5.398,1.834,346.833,4.679],
    [42.35246,-71.10861,-5.225,1.441,335.911,4.671],
    [42.35247,-71.10861,-5.56,1.439,341.99,4.676],
    [42.35249,-71.10862,-5.502,1.648,346.986,4.674],
    [42.35251,-71.10862,-5.636,1.823,347.989,4.671],
    [42.35252,-71.10863,-4.901,1.602,339.625,4.674],
    [42.35254,-71.10864,-4.979,2.176,342.769,4.675],
    [42.35256,-71.10864,-5,1.788,349.153,4.677],
    [42.35257,-71.10865,-4.957,1.933,347.881,4.675],
    [42.35259,-71.10865,-4.712,1.715,344.815,4.677],
    [42.35259,-71.10866,-5.113,1.296,328.854,4.678],
    [42.35261,-71.10867,-4.927,1.565,335.89,4.679],
    [42.35263,-71.10868,-4.927,1.913,336.469,4.679],
    [42.35264,-71.10869,-5.733,1.647,327.694,4.683],
    [42.35265,-71.1087,-5.759,1.645,323.213,4.683],
    [42.35265,-71.10871,-5.65,1.499,317.734,4.683],
    [42.35266,-71.10872,-5.317,1.192,321.904,4.681],
    [42.35268,-71.10874,-4.625,1.664,311.57,4.68],
    [42.35267,-71.10874,-4.95,0.775,285.28,4.681],
    [42.35266,-71.10875,-4.613,0.862,246.584,4.681],
    [42.35265,-71.10877,-4.786,1.756,233.213,4.681],
    [42.35263,-71.10879,-4.649,2.019,232.002,4.682],
    [42.35263,-71.10882,-4.922,2.095,243.664,4.682],
    [42.35262,-71.10884,-4.825,2.241,240.841,4.681],
    [42.3526,-71.10886,-4.525,2.155,232.983,4.679],
    [42.35259,-71.10888,-3.605,2.053,228.69,4.681],
    [42.35257,-71.10889,-3.219,2.25,223.451,4.683],
    [42.35256,-71.10892,-3.62,2.326,230.8,4.681],
    [42.35254,-71.10895,-4.118,2.678,233.221,4.681],
    [42.35253,-71.10897,-4.067,2.356,232.493,4.677],
    [42.35252,-71.10899,-3.761,2.261,232.837,4.68],
    [42.35251,-71.10901,-3.972,2.27,238.466,4.676],
    [42.35251,-71.10904,-3.95,2.168,244.919,4.678],
    [42.3525,-71.10907,-4.085,2.218,248.168,4.679],
    [42.35249,-71.10908,-3.599,2.042,240.603,4.679],
    [42.35248,-71.1091,-3.714,1.997,238.957,4.678],
    [42.35246,-71.10914,-3.33,2.464,240.415,4.681],
    [42.35245,-71.10916,-3.587,2.33,241.879,4.685],
    [42.35245,-71.10919,-3.56,2.259,250.462,4.689],
    [42.35244,-71.10922,-3.491,2.421,253.532,4.69],
    [42.35244,-71.10925,-4.497,2.414,260.096,4.689],
    [42.35244,-71.10927,-4.165,2.244,260.007,4.686],
    [42.35243,-71.1093,-4.211,2.288,253.145,4.684],
    [42.35243,-71.10933,-4.074,2.343,256.528,4.684],
    [42.35242,-71.10936,-4.454,2.362,259.189,4.683],
    [42.35241,-71.10938,-4.379,2.256,251.974,4.683],
    [42.3524,-71.1094,-5.079,1.881,245.226,4.681],
    [42.35239,-71.10943,-4.922,2.264,246.247,4.679],
    [42.35239,-71.10945,-4.86,2.118,246.672,4.679],
    [42.35238,-71.10947,-4.975,2.115,248.198,4.679],
    [42.35237,-71.1095,-4.565,2.054,250.028,4.679],
    [42.35237,-71.10952,-4.474,1.993,250.241,4.678],
    [42.35235,-71.10953,-4.389,1.762,241.33,4.676],
    [42.35235,-71.10955,-4.538,1.556,232.484,4.67],
    [42.35234,-71.10956,-4.705,1.606,231.735,4.669],
    [42.35233,-71.10957,-4.557,1.436,231.366,4.669],
    [42.35231,-71.10958,-4.884,1.657,218.051,4.672],
    [42.3523,-71.1096,-4.341,1.899,224.844,4.674],
    [42.35229,-71.10963,-4.832,2.167,225.026,4.671],
    [42.35228,-71.10964,-4.496,2.075,227.795,4.67],
    [42.35227,-71.10966,-4.803,1.581,233.458,4.673],
    [42.35227,-71.10968,-4.736,1.847,240.141,4.674],
    [42.35226,-71.1097,-4.542,1.81,238.674,4.675],
    [42.35225,-71.10972,-5.248,1.736,235.442,4.675],
    [42.35224,-71.10972,-5.035,1.538,223.492,4.672],
    [42.35223,-71.10974,-5.053,1.699,228.87,4.675],
    [42.35222,-71.10977,-5.198,2.096,229.494,4.679],
    [42.35221,-71.10979,-5.814,2.116,232.885,4.683],
    [42.3522,-71.1098,-5.018,1.967,228.082,4.687],
    [42.35218,-71.10981,-4.722,1.701,219.748,4.69],
    [42.35217,-71.10984,-4.993,1.899,226.755,4.691],
    [42.35216,-71.10985,-4.879,1.743,224.708,4.692],
    [42.35215,-71.10986,-4.276,1.199,223.497,4.692],
    [42.35215,-71.10988,-4.523,1.181,264.2,4.689],
    [42.35215,-71.10988,-4.119,0.495,287.145,4.686],
    [42.35215,-71.10989,-3.603,0.854,267.188,4.688],
    [42.35215,-71.1099,-4.224,0.991,257.086,4.687],
    [42.35214,-71.1099,-3.624,0.824,237.819,4.688],
    [42.35213,-71.1099,-3.835,0.387,203.031,4.69],
    [42.35212,-71.1099,-4.445,0.506,196.674,4.691],
    [42.35212,-71.1099,-4.306,0.189,197.818,4.69],
    [42.35212,-71.10989,-4.166,0.071,197.818,4.679],
    [42.35213,-71.1099,-3.838,0.019,197.818,4.672],
    [42.35213,-71.1099,-3.496,0.04,197.818,4.676],
    [42.35213,-71.1099,-2.993,0.03,197.818,4.675],
    [42.35213,-71.1099,-2.752,0.058,197.818,4.676],
    [42.35213,-71.1099,-2.801,0.116,197.818,4.674],
    [42.35213,-71.1099,-2.736,0,197.818,4.674],
    [42.35213,-71.1099,-2.774,0.145,197.818,4.673],
    [42.35213,-71.1099,-2.689,0,197.818,4.671],
    [42.35213,-71.1099,-2.689,0,197.818,4.671],
    [42.35213,-71.1099,-2.689,0,197.818,4.668],
    [42.35213,-71.1099,-2.689,0,197.818,4.667],
    [42.35213,-71.1099,-2.689,0,197.818,4.667],
    [42.35213,-71.1099,-2.689,0,197.818,4.667],
    [42.35213,-71.1099,-2.689,0,197.818,4.67],
    [42.35213,-71.1099,-2.689,0,197.818,4.671],
    [42.35213,-71.10989,-2.491,0,190.107,4.672],
    [42.35213,-71.10989,-2.491,0,190.107,4.673],
    [42.35213,-71.10989,-2.491,0,190.107,4.674],
    [42.35213,-71.10989,-2.491,0,190.107,4.675],
    [42.35212,-71.10989,-1.836,0.025,183.559,4.675],
    [42.35213,-71.10989,-1.621,0.052,183.559,4.674],
    [42.35212,-71.10988,-1.718,0.262,185.416,4.672],
    [42.35213,-71.10989,-1.64,0.045,185.416,4.666],
    [42.35213,-71.10989,-1.531,0,185.416,4.676],
    [42.35213,-71.10989,-1.17,0.065,185.416,4.669],
    [42.35213,-71.10989,-1.306,0.027,185.416,4.665],
    [42.35213,-71.10989,-1.452,0.017,185.416,4.661],
    [42.35213,-71.10989,-1.352,0,185.416,4.664],
    [42.35213,-71.10989,-1.667,0.016,185.416,4.665],
    [42.35213,-71.10989,-1.657,0,185.416,4.669],
    [42.35213,-71.1099,-1.61,0,185.416,4.671],
    [42.35213,-71.10989,-1.545,0,185.416,4.676],
    [42.35213,-71.10989,-1.59,0.542,180.333,4.678],
    [42.35213,-71.10989,-1.487,0,179.65,4.681],
    [42.35214,-71.1099,-1.134,0.034,179.65,4.685],
    [42.35214,-71.1099,-1.125,0,179.65,4.689],
    [42.35214,-71.10989,-1.413,0.165,179.65,4.686],
    [42.35214,-71.1099,-1.72,0.023,179.65,4.684],
    [42.35214,-71.1099,-1.717,0,179.65,4.686],
    [42.35214,-71.10989,-1.665,0.063,179.65,4.687],
    [42.35214,-71.10989,-1.648,0,179.65,4.689],
    [42.35214,-71.10988,-1.349,0.271,179.65,4.687],
    [42.35214,-71.10988,-0.902,0,179.65,4.687],
    [42.35214,-71.10988,-0.902,0,179.65,4.687],
    [42.35214,-71.10988,-0.902,0,179.65,4.688],
    [42.35213,-71.10987,-0.641,0.132,179.65,4.692],
    [42.35213,-71.10987,-1.044,0.058,179.65,4.693],
    [42.35214,-71.10987,-1.076,0,179.65,4.695],
    [42.35214,-71.10987,-1.174,0.016,179.65,4.697],
    [42.35214,-71.10987,-1.144,0,179.65,4.698],
    [42.35214,-71.10987,-1.144,0,179.65,4.692],
    [42.35214,-71.10987,-1.144,0,179.65,4.692],
    [42.35214,-71.10987,-1.144,0,179.65,4.694],
    [42.35214,-71.10988,-2.836,0.073,179.65,4.695],
    [42.35214,-71.10988,-3.132,0.088,179.65,4.697],
    [42.35214,-71.10988,-2.97,0,179.65,4.699],
    [42.35214,-71.10988,-3.644,0.108,179.65,4.7],
    [42.35214,-71.10988,-3.699,0.129,179.65,4.702],
    [42.35214,-71.10989,-3.856,0,179.65,4.705],
    [42.35214,-71.10989,-3.856,0,179.65,4.703],
    [42.35214,-71.10989,-3.856,0,179.65,4.705],
    [42.35214,-71.10989,-3.856,0,179.65,4.705],
    [42.35214,-71.10989,-3.773,0,179.65,4.709],
    [42.35214,-71.10989,-3.761,0,179.65,4.711],
    [42.35214,-71.10989,-3.761,0,179.65,4.711],
    [42.35214,-71.10989,-3.761,0,179.65,4.711],
    [42.35214,-71.10989,-3.761,0,179.65,4.713],
    [42.35214,-71.10989,-3.761,0,179.65,4.715],
    [42.35214,-71.10989,-3.761,0,179.65,4.716],
    [42.35214,-71.10989,-3.761,0,179.65,4.715],
    [42.35214,-71.10989,-3.761,0,179.65,4.712],
    [42.35214,-71.10989,-3.761,0,179.65,4.71],
    [42.35214,-71.10989,-3.761,0,179.65,4.709],
    [42.35215,-71.10991,-5.372,0,179.65,4.71],
    [42.35215,-71.10991,-5.372,0,179.65,4.707],
    [42.35215,-71.10991,-5.372,0,179.65,4.703],
    [42.35215,-71.10991,-5.372,0,179.65,4.702],
    [42.35215,-71.10992,-5.906,0.012,179.65,4.701],
    [42.35215,-71.10991,-5.714,0,179.65,4.696],
    [42.35215,-71.10992,-5.484,0.152,179.65,4.695],
    [42.35215,-71.10992,-5.317,0.169,179.65,4.693],
    [42.35215,-71.10991,-5.038,0.073,179.65,4.699],
    [42.35213,-71.1099,-5.299,0.931,160.342,4.7],
    [42.35214,-71.10991,-4.741,0,224.485,4.699],
    [42.35214,-71.10991,-4.741,0,224.485,4.697],
    [42.35214,-71.10991,-4.177,0,224.485,4.698],
    [42.35213,-71.10991,-4.498,0.19,224.485,4.694],
    [42.35214,-71.10991,-4.441,0,224.485,4.693],
    [42.35214,-71.10991,-4.441,0,224.485,4.695],
    [42.35214,-71.10991,-4.441,0,224.485,4.694],
    [42.35213,-71.1099,-3.774,0,224.485,4.694],
    [42.35213,-71.1099,-3.506,0,224.485,4.693],
    [42.35213,-71.1099,-3.506,0,224.485,4.691],
    [42.35213,-71.1099,-3.447,0.085,224.485,4.69],
    [42.35213,-71.1099,-3.412,0,224.485,4.691],
    [42.35213,-71.10991,-3.311,0,224.485,4.69],
    [42.35213,-71.10991,-3.311,0,224.485,4.692],
    [42.35213,-71.10991,-3.311,0,224.485,4.693],
    [42.35213,-71.10991,-3.311,0,224.485,4.692],
    [42.35181,-71.11005,7.299,0,0,51],
    [42.35182,-71.11005,7.299,0,0,148.66],
    [42.35182,-71.11005,7.299,0,0,151.517],
    [42.35189,-71.10981,11.678,0.038,0,200],
    [42.35196,-71.10996,3.092,0.679,60.66,63.438],
    [42.35194,-71.11001,3.045,0.075,2.116,34.433]
]



export async function moveBoat(time) {
    const locationObject = {
        lat: data[time][0], // Latitude value
        lon: data[time][1], // Longitude value
        angle: data[time][4] // Heading value (in degrees)
    };

    return locationObject;
};

export async function createPath(time) {

    if(time > 5){
        return data.slice(0, time-3).map(row => [row[0], row[1]]);
    }
    return data(0).map(row => [row[0], row[1]]);

};


    
    
