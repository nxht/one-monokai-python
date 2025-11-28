"""
Sample Python file to test One Monokai Python theme syntax highlighting.
"""

import os
import sys
from typing import List, Dict, Optional
from datetime import datetime


class DataProcessor:
    """A sample class for processing data."""
    
    def __init__(self, name: str, config: Optional[Dict] = None):
        self.name = name
        self.config = config or {}
        self._data: List[int] = []
    
    def add_data(self, values: List[int]) -> None:
        """Add values to the internal data list."""
        self._data.extend(values)
        print(f"Added {len(values)} values to {self.name}")
    
    def process(self) -> Dict[str, float]:
        """Process the data and return statistics."""
        if not self._data:
            return {"mean": 0.0, "sum": 0.0, "count": 0}
        
        total = sum(self._data)
        count = len(self._data)
        mean = total / count
        
        return {
            "mean": mean,
            "sum": float(total),
            "count": count,
            "max": float(max(self._data)),
            "min": float(min(self._data))
        }


def calculate_fibonacci(n: int) -> List[int]:
    """Calculate Fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    
    return fib


# Lambda function example
square = lambda x: x ** 2

# List comprehension
numbers = [i for i in range(1, 11) if i % 2 == 0]

# Dictionary comprehension
squared_dict = {num: square(num) for num in numbers}

# String formatting examples
name = "Python"
version = 3.11
message = f"Welcome to {name} {version}!"

# Regular expression
import re
pattern = r'\d{3}-\d{3}-\d{4}'
phone = "123-456-7890"
match = re.match(pattern, phone)

# Context manager
with open('example.txt', 'w') as f:
    f.write("Hello, World!\n")

# Decorator example
def timer_decorator(func):
    """A decorator to time function execution."""
    def wrapper(*args, **kwargs):
        start = datetime.now()
        result = func(*args, **kwargs)
        end = datetime.now()
        print(f"{func.__name__} took {end - start}")
        return result
    return wrapper


@timer_decorator
def slow_function(n: int) -> int:
    """A function that takes some time."""
    total = 0
    for i in range(n):
        total += i
    return total


if __name__ == "__main__":
    # Create processor instance
    processor = DataProcessor("Test Processor")
    
    # Add some data
    processor.add_data([10, 20, 30, 40, 50])
    
    # Process and display results
    stats = processor.process()
    print(f"Statistics: {stats}")
    
    # Calculate Fibonacci
    fib_numbers = calculate_fibonacci(10)
    print(f"Fibonacci sequence: {fib_numbers}")
    
    # Test decorator
    result = slow_function(1000000)
    print(f"Result: {result}")
    
    # Multi-line string
    multiline = """
    This is a multi-line string
    with multiple lines of text
    and proper indentation.
    """
    
    # Try-except block
    try:
        risky_operation = 10 / 0
    except ZeroDivisionError as e:
        print(f"Error occurred: {e}")
    finally:
        print("Cleanup completed")
