const fs = require('fs');

/** reading files */

// fs.readFile('../docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

/** writing files */

// fs.writeFile('../docs/blog1.txt', 'hello world', () => {
//     console.log('file was written');
// })

// fs.writeFile('../docs/blog2.txt', 'hello from the other side', () => {
//     console.log('file was written');
// })

/** directories */

// if (!fs.existsSync('../assests')) {
//     fs.mkdir('../assests', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder created');
//     });
// } else {
//     fs.rmdir('../assests', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder deleted');
//     })
// }

// if (fs.existsSync('../assests')) {
//     fs.rmdir('../assests', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder deleted');
//         setTimeout(() => {
//             fs.mkdir('../assests', (err) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 console.log('Folder created');
//             });
//         }, 5000);
//     })
// }

/** deleting files */
if (fs.existsSync('../docs/deletemefile.txt')) {
    fs.unlink('../docs/deletemefile.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File Deleted');
    })
} else {
    console.log('File does not exist');
}