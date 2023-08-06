'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
  WrapperTitle,
} from '~/components/layouts/wrapper'

function AboutPage() {
  return (
    <Wrapper hasFooter hasNavbar title='About'>
      <WrapperHeader>
        <WrapperTitle>Giới thiệu doanh nghiệp</WrapperTitle>
      </WrapperHeader>
      <WrapperContent>
        <p>
          <strong>Công ty cổ phần V5T</strong> được thành lập từ ngày 16 tháng
          12 năm 2004. Là một Công ty chuyên họat động trong lĩnh vực kinh doanh
          cung cấp thiết bị Truyền Thanh - Truyền Hình - Truyền Hình Cáp và Dịch
          vụ quảng cáo Truyền Hình. Sau hơn 8 năm hoạt động và không ngừng phát
          triển, hiện nay Công ty chúng tôi ngày càng mở rộng quy mô họat động
          trên khắp tỉnh thành
        </p>
        <Image
          width={900}
          height={500}
          src='https://datsolar.com/wp-content/uploads/sites/4/2022/04/gioi-thieu-datsolar.png'
          alt='a1'
          sizes='100%'
          className='h-auto w-auto'
        />
        <p>
          Trong đó, V5T là thương hiệu thành viên của DAT chuyên về mảng Điện
          năng lượng mặt trời – Lưu trữ điện và đèn năng lượng mặt trời, đã cung
          cấp và triển khai hơn 10.000 hệ thống điện mặt trời có tổng công suất
          hơn 700MWp, mang đến cho khách hàng, đối tác và nhà đầu tư những giải
          pháp điện mặt trời thông minh, tối ưu chi phí đầu tư, rút ngắn thời
          gian hoàn vốn nhưng vẫn đảm bảo tính hiệu quả cao.
        </p>
        <Image
          width={900}
          height={500}
          src='https://datsolar.com/wp-content/uploads/sites/4/2021/10/gioi-thieu-dat-solar-21810.png'
          alt='a1'
          sizes='100%'
          className='h-auto w-auto'
        />
        <p>
          V5T tự hào khi có hơn 10.000 khách hàng, đối tác đã đồng hành cùng
          chúng tôi trong suốt hơn 16 năm qua. Để nhận được sự tin tưởng đó, V5T
          đã xây dựng một Hệ sinh thái giá trị toàn diện nhằm gia tăng hiệu quả,
          cam kết mạnh mẽ cho sự phát triển bền vững và nâng cao lợi ích khách
          hàng.
        </p>
        <Image
          width={900}
          height={500}
          src='https://datsolar.com/wp-content/uploads/sites/4/2023/06/HST-new.png'
          alt='a1'
          sizes='100%'
          className='h-auto w-auto'
        />
        <p>
          DAT Solar là đối tác chiến lược và nhà phân phối Ủy quyền của Canadian
          Solar, Sungrow, Pylontech, đối tác độc quyền của Sokoyo, độc quyền
          Hybrid Inverter của GoodWe và là tổng đại diện của INVT tại Việt Nam.
          Ngoài ra, DAT Solar còn là đối tác chiến lược của EVNSPC, EVNHCMC; là
          nhà cung cấp thiết bị cho Công ty Dịch vụ Điện lực Miền Nam, Công ty
          Dịch vụ Điện lực TP.HCM, Tổng Công ty công trình Viettel (Viettel
          Construction) và hơn 1.800 đối tác trên toàn quốc. Là chuẩn mực tổng
          thầu EPC – DAT Solar hướng đến biểu tượng chất lượng và hiệu quả. DAT
          Solar tự hào được tin chọn là tổng thầu EPC quy mô lớn bởi nhiều tập
          đoàn tài chính quốc tế và ngân hàng: Shire Oak International, Green
          Yellow, HDBank, OCB. Triển khai nhiều dự án có tổng công suất hàng
          chục MWp cho ngành điện; các doanh nghiệp trong nước và FDI.
        </p>
        <Image
          width={900}
          height={500}
          src='https://datsolar.com/wp-content/uploads/sites/4/2021/10/gioi-thieu-dat-solar-41810.png'
          alt='a1'
          sizes='100%'
          className='h-auto w-auto'
        />
        <p>
          Điện năng lượng mặt trời hòa lưới là một trong những giải pháp phổ
          biến nhất hiện nay, vận hành đơn giản và thân thiện với môi trường. Hệ
          thống sẽ hấp thụ bức xạ mặt trời để tạo ra nguồn điện sạch; sau đó hòa
          vào lưới điện để cung cấp cho các tải tiêu thụ, giúp tiết kiệm chi phí
          tiền điện hằng tháng, giảm thải khí CO2, bảo vệ môi trường sống xanh.
        </p>
      </WrapperContent>
    </Wrapper>
  )
}

export default AboutPage
