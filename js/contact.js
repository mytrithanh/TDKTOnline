$("#contactForm").validate ({
    rules: {
        FamilyName: "required",
        FirstName: "required",
        Phone: {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        message: {
            required: true,
            minlength: 100
        }
   },
   messages: {
       FamilyName: "Vui lòng nhập họ",
       FirstName: "Vui lòng nhập tên",
       Phone: {
           required: "Vui lòng nhập số điện thoại",
           minlength: "Số điện thoại tối thiểu 10 số!",
           maxlength: "Vui lòng nhập số điện thoại chính xác!"
  
       },
       Email: {
            required: "Vui lòng nhập Email"
        },
       message: {
           required: "Vui lòng nhập nội dung!",
           minlength: "Nội dung ít nhất phải 100 ký tự!",
       }
   }
  })
  