var compound_transform;

// automatically called whenever any transform changes
function CalculateCompoundTransform(transforms) {
    // matrices in `transforms[i].mat4x4`
    // note `transform[0]` is first tranform to apply to vertex
    
    // if only one transform, set compound transform eequal to it
    // otherwise multiply all matrices together (in proper order)
    // `compound_transform = Matrix.multiply(...)`
    var transform_matrices = [];

    //compound_transform = new Matrix(4, 4); // change / remove this
    compound_transform = new Matrix(4, 4);

    if (transforms.length != 1) {
        for (i = 0; i < transforms.length; i++) {
            transform_matrices[i] = transforms[i].mat4x4;
        }
        compound_transform = Matrix.multiply(transform_matrices);
    }

    else {
        compound_transform = transforms[0].mat4x4;
    }


    return compound_transform;
}

// automatically called whenever compound transform changes
function CalculateTransformedVertex(vertex) {
    // multiple vertex by compound_transform
    // `final_vertex = Matrix.multiply(...)`
    var final_vertex = new Vector(4); // change / remove this
    final_vertex = Matrix.multiply([compound_transform, vertex]);

    return final_vertex;
}

// automatically called whenever user modifies a transform (changes type or values)
function ChangeTransform(index, type, values) {
    console.log(type);
    app.transforms[index].type = type;
    // update `app.transforms[index].mat4x4`

    if (type == "translate") {
        console.log(values);
        Mat4x4Translate(app.transforms[index].mat4x4, values[0], values[1], values[2]);
    }

    else if (type == "scale") {
        Mat4x4Scale(app.transforms[index].mat4x4, values[0], values[1], values[2]);
    }

    else if (type == "rotate_x") {
        Mat4x4RotateX(app.transforms[index].mat4x4, values[0]);
    }

    else if (type == "rotate_y") {
        Mat4x4RotateY(app.transforms[index].mat4x4, values[0]);
    }

    else {
        Mat4x4RotateZ(app.transforms[index].mat4x4, values[0]);
    }
    
    app.compound = CalculateCompoundTransform(app.transforms);
    app.final_vertex = CalculateTransformedVertex(app.vertex);
}
