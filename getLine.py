import argparse

def read_line_after_x_chars_after_y_lines(file_path, x, y):
    with open(file_path, 'r') as file:
        # Skip y lines
        for _ in range(y):
            file.readline()

        # Read the line located x characters after the beginning of the next line
        current_position = file.tell()  # Get the current file position
        line = file.readline()          # Read the next line
        file.seek(current_position + x) # Move the file cursor x characters after the beginning of the line
        result_line = file.readline()    # Read the line at the new position

        return result_line.rstrip('\n')  # Remove '\n' at the end if present

def main():
    parser = argparse.ArgumentParser(description='Read a line from a file after skipping lines and moving a certain distance.')
    parser.add_argument('file_path', type=str, help='Path to the input file')
    parser.add_argument('x_value', type=int, help='Number of characters to move after the beginning of the line')
    parser.add_argument('y_value', type=int, help='Number of lines to skip')

    args = parser.parse_args()

    result = read_line_after_x_chars_after_y_lines(args.file_path, args.x_value, args.y_value)
    print(result)

if __name__ == '__main__':
    main()
