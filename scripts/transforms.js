// set values of mat4x4 to the identity matrix
function Mat4x4Identity(mat4x4) {
    mat4x4.values = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
}

// set values of mat4x4 to the translate matrix
function Mat4x4Translate(mat4x4, tx, ty, tz) {
    //mat4x4.values = ....
    mat4x4.values = [[1, 0, 0, tx], [0, 1, 0, ty], [0, 0, 1, tz], [0, 0, 0, 1]];
}
// set values of mat4x4 to the scale matrix
function Mat4x4Scale(mat4x4, sx, sy, sz) {
    //mat4x4.values = ...
    mat4x4.values = [[sx, 0, 0, 0], [0, sy, 0, 0], [0, 0, sz, 0], [0, 0, 0, 1]];
}

// set values of mat4x4 to the rotate about x-axis matrix
function Mat4x4RotateX(mat4x4, theta) {
    //mat4x4.values = ...
    mat4x4.values = [[1, 0, 0, 0], [0, Math.cos((theta * Math.PI) / 180), -Math.sin((theta * Math.PI) / 180), 0], [0, Math.sin((theta * Math.PI) / 180), Math.cos((theta * Math.PI) / 180), 0], [0, 0, 0, 1]];
}

// set values of mat4x4 to the rotate about y-axis matrix
function Mat4x4RotateY(mat4x4, theta) {
    //mat4x4.values = ...
    mat4x4.values = [[Math.cos((theta * Math.PI) / 180), 0, Math.sin((theta * Math.PI) / 180), 0], [0, 1, 0, 0], [-Math.sin((theta * Math.PI) / 180), 0, Math.cos((theta * Math.PI) / 180), 0], [0, 0, 0, 1]];
}

// set values of mat4x4 to the rotate about z-axis matrix
function Mat4x4RotateZ(mat4x4, theta) {
    //mat4x4.values = ...
    mat4x4.values = [[Math.cos((theta * Math.PI) / 180), -Math.sin((theta * Math.PI) / 180), 0, 0], [Math.sin((theta * Math.PI) / 180), Math.cos((theta * Math.PI) / 180), 0, 0], [0, 0 ,1, 0], [0, 0, 0, 1]];
}

// set values of mat4x4 to the shear parallel to the xy-plane matrix
function Mat4x4ShearXY(mat4x4, shx, shy) {
    //mat4x4.values = ...
    mat4x4.values = [[1, 0, shx, 0], [0, 1, shy, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
}

// set the x,y,z values of a 3-component vector
function Vector3(vec3, x, y, z) {
    vec3.values = [x, y, z];
}

// set the x,y,z,w values of a 4-component vector
function Vector4(vec3, x, y, z, w) {
    vec3.values = [x, y, z, w];
}
