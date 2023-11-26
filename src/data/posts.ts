const postDatas = [
  {
    title: "Hôm nay NASA phóng tên lửa thành công",
    content:
      "Hôm nay, NASA đã phóng tên lửa một cách thành công, mở ra những cơ hội mới cho việc khám phá không gian. Đây là bước tiến quan trọng trong nghiên cứu và phát triển công nghệ vũ trụ.",
    created_at: "2023-01-01T12:00:00",
    author_id: 1,
    tags: ["Khoa học", "Vũ trụ"]
  },
  {
    title: "Phát hiện mới về loài động vật ở rừng Amazon",
    content:
      "Một phát hiện mới trong nghiên cứu động vật hoang dã ở rừng Amazon đã được công bố. Các nhà khoa học đã phát hiện loài động vật mới với những đặc điểm độc đáo và quan trọng cho hệ sinh thái.",
    created_at: "2023-01-02T12:00:00",
    author_id: 2,
    tags: ["Động vật", "Nghiên cứu"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Nghệ thuật và văn hóa: Triển lãm mới tại Paris",
    content:
      "Triển lãm nghệ thuật mới tại Paris đã thu hút sự chú ý của cộng đồng nghệ sĩ và người yêu nghệ thuật. Các tác phẩm độc đáo và sáng tạo được trưng bày để tạo ra trải nghiệm tuyệt vời cho khán giả.",
    created_at: "2023-01-04T12:00:00",
    author_id: 4,
    tags: ["Nghệ thuật", "Văn hóa"]
  },
  {
    title: "Công nghệ mới giúp cải thiện sức khỏe cộng đồng",
    content:
      "Sự phát triển trong lĩnh vực công nghệ y tế đang đóng góp vào việc cải thiện sức khỏe cộng đồng. Các ứng dụng và thiết bị thông minh giúp theo dõi và duy trì lối sống lành mạnh.",
    created_at: "2023-01-05T12:00:00",
    author_id: 5,
    tags: ["Sức khỏe", "Công nghệ"]
  },
  {
    title: "Champions League: Đội bóng nào sẽ vô địch mùa này?",
    content:
      "Cuộc đua đến chức vô địch Champions League đang diễn ra hấp dẫn với sự cạnh tranh giữa các đội bóng hàng đầu châu Âu. Ai sẽ là nhà vô địch trong mùa giải năm nay?",
    created_at: "2023-01-06T12:00:00",
    author_id: 6,
    tags: ["Thể thao", "Bóng đá"]
  },
  {
    title: "Phát hiện mới về ảnh hưởng của môi trường đô thị đến tâm trạng",
    content:
      "Nghiên cứu mới cho thấy mối liên kết giữa môi trường đô thị và tâm trạng con người. Các thành phố có thiết kế xanh hơn có thể giúp cải thiện tâm lý và chất lượng cuộc sống của cư dân.",
    created_at: "2023-01-07T12:00:00",
    author_id: 7,
    tags: ["Môi trường", "Sức khỏe tâm thần"]
  },
  {
    title: "Xu hướng kinh doanh mới trong năm nay",
    content:
      "Kinh doanh đang chịu ảnh hưởng của nhiều yếu tố mới, bao gồm cách thức tiếp cận khách hàng và xu hướng tiêu dùng. Do đó, các doanh nghiệp đang phải thích nghi để duy trì và phát triển trong môi trường kinh doanh đầy thách thức.",
    created_at: "2023-01-08T12:00:00",
    author_id: 8,
    tags: ["Kinh doanh", "Xu hướng"]
  },
  {
    title: "Những sự kiện lịch sử quan trọng đặc biệt",
    content:
      "Trong lịch sử, có những sự kiện đặc biệt quan trọng đánh dấu những thay đổi lớn trong xã hội. Những sự kiện này có ảnh hưởng sâu rộng và để lại dấu ấn lâu dài trong tâm trí con người.",
    created_at: "2023-01-09T12:00:00",
    author_id: 9,
    tags: ["Lịch sử", "Sự kiện"]
  },
  {
    title: "Bí mật của thời trang hiện đại",
    content:
      "Thế giới thời trang hiện đại đang tiếp tục mở ra những bí mật độc đáo về quá trình thiết kế và sản xuất. Những xu hướng mới và vật liệu sáng tạo đang làm thay đổi cách chúng ta nhìn nhận về thời trang.",
    created_at: "2023-01-10T12:00:00",
    author_id: 10,
    tags: ["Thời trang", "Sáng tạo"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  },
  {
    title: "Cuộc cách mạng trong giáo dục: Học trực tuyến",
    content:
      "Giáo dục đang trải qua một cuộc cách mạng với sự phổ biến của học trực tuyến. Việc này mang lại nhiều cơ hội và thách thức mới cho học sinh và giáo viên trên khắp thế giới.",
    created_at: "2023-01-03T12:00:00",
    author_id: 3,
    tags: ["Giáo dục", "Công nghệ"]
  }
];

export default postDatas;
