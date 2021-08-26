// API: https://jsonplaceholder.typicode.com/users
// Câu 1: Lấy ra dữ liệu của API và gửi dữ liệu vào table trong tbody id='table-body'
// Câu 2: Tạo ra 1 mảng chứa tên cua người dùng và hiển thị vào thẻ có id="name"
// Câu 3: Tạo ra một đoạn chuỗi với thông tin name, email, phone của các người dùng với điều kiện tên của họ phải bao gồm chữ cái C và hiển thị ra thẻ có id="reducer"
// VD: Danh sách người dùng có chữ cái C trong tên là:
// 1. Manh Chuong - truongtech@4handy.com - 09987654312
// 2. Xuan Chong - trongtech@4handy.com - 09983154312
// 3. Cang Nam - namtech@4handy.com - 09987654844
// 4. Quang Thach - thanhtech@4handy.com - 09985554312
// PS: Bạn có thể làm câu nào trước cũng được nhé ! Có thể tra google trong quá trình làm bài như cách bạn theo đuổi Crush :3

async function buildTable(url) {
    const response = await fetch(url);
    const data = await response.json();

    const tableBody = document.getElementById("table-body");
    const user = document.getElementById("name");
    const reducer = document.getElementById("reducer");

    const users = [];

    // get API
    for (let i = 0; i < data.length; i++) {
        const rows = `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].username}</td>
                <td>${data[i].email}</td>
                <td>${data[i].address.street + ", " + data[i].address.suite + ", " + data[i].address.city}</td>
                <td>${data[i].phone}</td>
            </tr>
        `;

        tableBody.innerHTML += rows;

        users.push(data[i].name);
    }

    // get User
    for (let i = 0; i < users.length; i++) {
        user.innerHTML += users[i] + "<br>"
    }

    // get User with "C"
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].name.length; j++) {
            if (data[i].name[j] === "C") {
                const newString = `${data[i].name + " - " + data[i].email + " - " + data[i].phone}`;

                reducer.innerHTML += newString + "<br>"
            }
        }
    }
}

buildTable("https://jsonplaceholder.typicode.com/users");