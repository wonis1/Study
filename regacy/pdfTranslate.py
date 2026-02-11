from pypdf import PdfReader, PdfWriter

# 🔹 보호된 PDF 파일 경로 입력
input_pdf = "02.AICC-sequenceDiagram.pdf"   # 암호 걸린 PDF 파일명
output_pdf = "unlocked.pdf"   # 암호 제거된 새 PDF 파일명
password = "MindWare!#"    # PDF를 열 수 있는 암호 입력

# 🔹 PDF 읽기 및 암호 해제
reader = PdfReader(input_pdf)
if reader.is_encrypted:
    reader.decrypt(password)  # 암호 입력하여 해제

# 🔹 새 PDF 파일로 저장 (권한 제거)
writer = PdfWriter()
for page in reader.pages:
    writer.add_page(page)

with open(output_pdf, "wb") as f:
    writer.write(f)

print(f"✅ 암호가 제거된 PDF가 생성됨: {output_pdf}")
